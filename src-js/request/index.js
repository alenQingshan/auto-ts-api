const axios = require('axios');
const { API_CONFIG } = require('../api/config');

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
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
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
  (response) => {
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
const request = {
  /**
   * GET 请求
   * @param {string} url - 请求地址
   * @param {Object} params - 查询参数
   * @param {Object} config - axios 配置
   * @returns {Promise}
   */
  get(url, params, config) {
    return instance.get(url, { params, ...config });
  },

  /**
   * POST 请求
   * @param {string} url - 请求地址
   * @param {Object} data - 请求数据
   * @param {Object} config - axios 配置
   * @returns {Promise}
   */
  post(url, data, config) {
    return instance.post(url, data, config);
  },

  /**
   * PUT 请求
   * @param {string} url - 请求地址
   * @param {Object} data - 请求数据
   * @param {Object} config - axios 配置
   * @returns {Promise}
   */
  put(url, data, config) {
    return instance.put(url, data, config);
  },

  /**
   * DELETE 请求
   * @param {string} url - 请求地址
   * @param {Object} params - 查询参数
   * @param {Object} config - axios 配置
   * @returns {Promise}
   */
  delete(url, params, config) {
    return instance.delete(url, { params, ...config });
  },

  /**
   * PATCH 请求
   * @param {string} url - 请求地址
   * @param {Object} data - 请求数据
   * @param {Object} config - axios 配置
   * @returns {Promise}
   */
  patch(url, data, config) {
    return instance.patch(url, data, config);
  },

  /**
   * 上传文件
   * @param {string} url - 上传地址
   * @param {FormData} formData - 表单数据
   * @param {Object} config - axios 配置
   * @returns {Promise}
   */
  upload(url, formData, config = {}) {
    return instance.post(url, formData, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...config.headers
      }
    });
  },

  /**
   * 下载文件
   * @param {string} url - 下载地址
   * @param {Object} params - 查询参数
   * @param {string} filename - 文件名
   * @returns {Promise}
   */
  download(url, params, filename = 'download') {
    return instance.get(url, {
      params,
      responseType: 'blob'
    }).then((response) => {
      if (typeof window !== 'undefined') {
        const blob = new Blob([response]);
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href);
      }
      return response;
    });
  }
};

module.exports = request;
