import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method
} from 'axios'
import axiosLoading from '@/_packages/request/loading'
import { $singleMsg } from '@/resources/plugins'
import router from '@/router'
import storage from '@/utils/storage'
import server from '@/_config/server'
import axiosRefreshToken from '@/_packages/request/refreshToken'
import { store } from '@/store'

declare module 'axios' {
  interface AxiosRequestConfig {
    /**
     * 开启loading(默认开启)
     */
    loading?: boolean
    /**
     * 当前url已经重试的次数
     */
    retryCount?: number
    /**
     * 是否需要响应体
     */
    needResponse?: boolean
    /**
     * 是否需要错误提示
     */
    enableErrorTips?: boolean
  }
}

// 定义常见http状态码错误
const httpStatus: Record<number, string> = {
  400: '请求参数错误',
  401: '授权状态失效，请重新登录',
  402: '您的账号已在其他地方登录，请重新登录',
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

interface Options {
  base: AxiosRequestConfig
  interceptors?: {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorCatch?: (error: any) => any
    responseInterceptor?: (config: AxiosResponse) => AxiosResponse
    responseInterceptorCatch?: (error: any) => any
  }
}

export class BaseService {
  private http: AxiosInstance
  constructor() {
    this.http = axios.create(options.base)

    axiosLoading(this.http, {
      open: (config) => {
        return config.loading !== false
      }
    })
    axiosRefreshToken(this.http, {
      refreshService: async () => {
        const { default: authService } = await import(
          '@/services/services/auth.service'
        )
        return authService.refresh({
          refresh_token: storage.get('refresh_token')
        })
      },
      refreshCondition: (error) => {
        return (
          error.response?.status === 401 &&
          !error.config.url.includes('/api/auth/refresh')
        )
      }
    })
    this.http.interceptors.request.use(
      (config) => {
        config = options.interceptors?.requestInterceptor?.(config) || config
        return config
      },
      (error) => {
        error = options.interceptors?.requestInterceptorCatch?.(error) || error
        return Promise.reject(error)
      }
    )

    this.http.interceptors.response.use(
      async (response) => {
        response =
          options.interceptors?.responseInterceptor?.(response) || response
        const { config, data } = response
        if (data.status === 20) {
          const needResponse = config.needResponse
          return needResponse ? response : data.data
        } else {
          if (config.enableErrorTips !== false) {
            $singleMsg('error', data.message)
          }
          return Promise.reject(data.message)
        }
      },
      async (error) => {
        error = options.interceptors?.responseInterceptorCatch?.(error) || error
        // Request canceled
        if (axios.isCancel(error)) {
          const { url } = (error as any).config
          return Promise.reject(`${url} => 请求被取消`)
        }
        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        if (error.response) {
          console.log('error.response: ', error.response)
          const {
            config,
            response: { data, status }
          } = error
          let _data = data
          if (config.responseType === 'blob') {
            _data = await this.blobToJson(_data)
          }
          // 全局错误提示
          if (config.enableErrorTips !== false) {
            const message =
              _data.message ||
              httpStatus[status] ||
              `后端接口未按照约定返回，请注意：\n${config.url}`
            $singleMsg('error', message)
          }
        } else if (error.request) {
          // 请求已经成功发起，但没有收到响应
          const { message } = error
          $singleMsg('error', message)
        }
        return Promise.reject(error)
      }
    )
  }

  blobToJson(blob: any) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result as string)
          resolve(data)
        } catch (error) {
          resolve({})
        }
      }
      reader.readAsText(blob)
    })
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
      data: ['post', 'put', 'patch', 'delete'].includes(method)
        ? body
        : undefined,
      ...ext
    })
  }
}

export type ExtOptions = AxiosRequestConfig

const options: Options = {
  base: {
    baseURL: server.baseUrl
  },
  interceptors: {
    requestInterceptor: (config) => {
      const token = storage.get('token')
      token && ((config.headers as any).Authorization = `Bearer ${token}`)
      return config
    },
    responseInterceptorCatch(error) {
      if (error.response?.status === 401 || error.response?.status === 402) {
        store.dispatch('account/logout')
        router.replace({
          name: 'login'
        })
      }
      return error
    }
  }
}
