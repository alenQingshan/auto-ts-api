import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_CONFIG } from '../api/config';

/**
 * 创建 axios 实例
 */
const instance = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: API_CONFIG.headers
});

/**
 * 请求拦截器
 */
instance.interceptors.request.use(
  (config) => {
    // 添加 token
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    // 根据实际业务调整
    if (data.code === 200 || data.code === 201) {
      return data.data;
    }
    return Promise.reject(new Error(data.message || '请求失败'));
  },
  (error) => {
    // 处理错误
    if (error.response) {
      const { status } = error.response;
      switch (status) {
        case 401:
          // 未授权，跳转登录
          console.error('未授权，请重新登录');
          break;
        case 403:
          console.error('没有权限访问');
          break;
        case 404:
          console.error('请求的资源不存在');
          break;
        case 500:
          console.error('服务器错误');
          break;
        default:
          console.error('请求失败');
      }
    }
    return Promise.reject(error);
  }
);

/**
 * 通用请求方法
 */
export const request = {
  /**
   * GET 请求
   */
  get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return instance.get(url, { params, ...config });
  },

  /**
   * POST 请求
   */
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return instance.post(url, data, config);
  },

  /**
   * PUT 请求
   */
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return instance.put(url, data, config);
  },

  /**
   * DELETE 请求
   */
  delete<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return instance.delete(url, { params, ...config });
  },

  /**
   * PATCH 请求
   */
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return instance.patch(url, data, config);
  },

  /**
   * 上传文件
   */
  upload<T = any>(url: string, formData: FormData, config?: AxiosRequestConfig): Promise<T> {
    return instance.post(url, formData, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...config?.headers
      }
    });
  },

  /**
   * 下载文件
   */
  download(url: string, params?: any, filename?: string): Promise<void> {
    return instance.get(url, {
      params,
      responseType: 'blob'
    }).then((response: any) => {
      const blob = new Blob([response]);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename || 'download';
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }
};

export default request;
