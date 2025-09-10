import router from '@/router'
import storage from '@/utils/storage'
import server from '@/_config/server'
import loading from '@/_packages/request/loading'
import { RequestOptions } from '@/_packages/request/utils/request'
import queueRequest from '@/_packages/request/utils/queue'
import cancelRequest from '@/_packages/request/utils/cancel'
import axios, {
  AxiosInstance,
  Method,
  AxiosRequestConfig,
  AxiosResponse,
  ResponseType
} from 'axios'

// 定义常见http状态码错误
const httpStatus: { [key: number]: string } = {
  400: '请求参数错误',
  401: '授权状态失效，请重新登录',
  403: '服务器拒绝访问',
  404: '404 Not Found',
  405: '请求方法不允许',
  408: '请求超时',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持'
}

export class BaseService {
  private http: AxiosInstance
  queue: any[]
  constructor() {
    this.http = axios.create(options.base)
    this.queue = []

    this.http.interceptors.request.use(
      async (config: AxiosRequestConfig) => {
        try {
          /** 自定义请求拦截器 */
          await options.interceptors?.request?.(config)
          /** 如果配置了loading */
          if (config.loading !== false && !config.retryActiveCount) {
            options.loading?.loadingStart()
          }
          /** 开启队列，不取消请求 */
          if (config.queue) {
            config.queueConfig = {
              stamp: Date.now(),
              status: false,
              response: null,
              resolve: null
            }
            queueRequest.addQueue(config)
          }
          /** 开启队列，取消上次请求*/
          if (config.cancel) {
            cancelRequest.removeQueue(config)
            cancelRequest.addQueue(config)
          }
          return config
        } catch (e) {
          // 捕获代码错误
          return Promise.reject(e)
        }
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
    this.http.interceptors.response.use(
      async (response: any) => {
        try {
          /** 自定义响应拦截器 */
          await options.interceptors?.response?.(response)
          options.loading?.loadingClose()

          // 检查响应数据是否存在
          if (!response.data) {
            const errorMessage = '服务器返回空数据'
            options.loading?.showToast?.(errorMessage)
            return Promise.reject(new Error(errorMessage))
          }

          // 强制要求status字段存在
          if (response.data.status === undefined) {
            const errorMessage = '响应格式错误：缺少status字段'
            options.loading?.showToast?.(errorMessage)
            return Promise.reject(new Error(errorMessage))
          }

          // 严格拦截所有非20状态码，不返回任何数据
          if (response.data.status !== 20) {
            // 提取错误信息
            const errorMessage =
              response.data.message || `业务错误：${response.data.status}`
            options.loading?.showToast?.(errorMessage)

            // 清理队列和取消请求
            if (response.config.queue) {
              queueRequest.removeQueue(response.config)
            }
            if (response.config.cancel) {
              cancelRequest.removeQueue(response.config)
            }

            // 抛出错误，确保不返回任何数据到业务层
            return Promise.reject(new Error(errorMessage))
          }

          // 状态码为20，继续处理

          // 队列处理
          if (response.config.queue) {
            return new Promise((resolve) => {
              response.config.queueConfig.status = true
              response.config.queueConfig.response = response.data
              response.config.queueConfig.resolve = resolve
              queueRequest.removeQueue(response.config)
            })
          }

          // 取消请求处理
          if (response.config.cancel) {
            cancelRequest.removeQueue(response.config)
          }

          // 成功时返回数据
          return response.data.data
        } catch (e) {
          /** 如果捕获到代码异常，直接reject */
          if (e instanceof Error) {
            return Promise.reject(e)
          }
          return this.retryRequest(response)
        }
      },
      async (error: any) => {
        if (error?.response) {
          /** 执行错误拦截器钩子 */
          try {
            await options.interceptors?.responseError?.(error.response)
            //如果HTTP状态码非200，并且有返回内容
            return this.retryRequest(error.response)
          } catch (e) {
            /** 如果捕获到代码异常，直接reject */
            if (e instanceof Error) {
              return Promise.reject(e)
            }
            return this.retryRequest(error.response)
          }
        } else {
          if (axios.isCancel(error)) {
            //主动取消请求
            return Promise.reject(new Error(error.message))
          } else {
            options.loading?.showToast?.(error?.message || error + '')
            return Promise.reject(error?.message || error + '' || '未知错误')
          }
        }
      }
    )
  }

  /** 请求重试 */
  retryRequest(response: AxiosResponse) {
    const config = response.config
    if (config.retryActiveCount === undefined) {
      //设置当前重试第几次，默认0
      config.retryActiveCount = 0
    }
    if (config.retryCount === undefined) {
      //设置重置最大次数，默认3
      config.retryCount = 3
    }
    if (config.retryActiveCount >= config.retryCount || config.retry !== true) {
      return this.handleReject(response)
    }
    config.retryActiveCount += 1
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.http(response.config))
      }, config.retryDelay || 100)
    })
  }
  /** 抛出请求异常 */
  async handleReject(response: AxiosResponse) {
    options.loading?.loadingClose()
    queueRequest.removeItem(response.config)
    cancelRequest.removeQueue(response.config)
    //进行全局错误提示
    if (response.data.detail) {
      //如果后端返回了具体错误内容
      options.loading?.showToast?.(response.data.detail)
      return Promise.reject(response.data)
    }
    if (response.status && httpStatus[response.status]) {
      // 存在错误状态码
      options.loading?.showToast?.(httpStatus[response.status])
      return Promise.reject(response.data)
    }
    //如果没有具体错误内容，找后端
    console.error(`后端接口未按照约定返回，请注意：\n${response.config.url}`)
    await options.loading?.showToast?.('未知错误，请稍后再试')
    return Promise.reject(new Error('未知错误，请稍后再试'))
  }

  protected request<R>(
    method: Method,
    path: string,
    body?: any,
    ext?: ExtOptions
  ): Promise<R> {
    return this.http.request<any, R, any>({
      url: path,
      method,
      params: ['get'].includes(method) ? body : undefined,
      data: ['post', 'put', 'patch'].includes(method) ? body : undefined,
      queue: ext?.queue,
      cancel: ext?.cancel,
      retry: ext?.retry,
      loading: ext?.loading,
      baseURL: ext?.baseUrl || options.base.baseURL,
      responseType: ext?.responseType
    })
  }
}

export interface ExtOptions {
  queue?: boolean | undefined
  cancel?: boolean | undefined
  retry?: boolean | undefined
  loading?: boolean | undefined
  baseUrl?: string | null
  responseType?: ResponseType
}

const options: RequestOptions = {
  base: {
    baseURL: server.baseUrl
  },
  loading,
  interceptors: {
    request: (config) => {
      const token = storage.get('token')
      token && ((config.headers as any).Authorization = `Bearer ${token}`)
      return Promise.resolve(config)
    },
    responseError(errorResponse) {
      if (errorResponse.status === 401) {
        router.replace({
          name: 'login'
        })
      }
      return Promise.reject('授权状态失效，请重新登录')
    }
  }
}
