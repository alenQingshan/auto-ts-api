const axios = require('axios');

/**
 * HTTP 状态码错误信息映射
 */
const httpStatus = {
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
};

/**
 * 基础服务类
 * 提供通用的 HTTP 请求功能
 */
class BaseService {
  constructor(options = {}) {
    // 默认配置
    const defaultOptions = {
      baseURL: process.env.API_BASE_URL || 'http://localhost:3000/api/v1',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // 合并配置
    const config = { ...defaultOptions, ...options };

    // 创建 axios 实例
    this.http = axios.create(config);

    // 设置请求拦截器
    this.setupRequestInterceptor();

    // 设置响应拦截器
    this.setupResponseInterceptor();
  }

  /**
   * 设置请求拦截器
   */
  setupRequestInterceptor() {
    this.http.interceptors.request.use(
      (config) => {
        // 添加 token
        const token = this.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // 显示 loading（如果需要）
        if (config.loading !== false) {
          this.showLoading();
        }

        return config;
      },
      (error) => {
        this.hideLoading();
        console.error('请求错误:', error);
        return Promise.reject(error);
      }
    );
  }

  /**
   * 设置响应拦截器
   */
  setupResponseInterceptor() {
    this.http.interceptors.response.use(
      (response) => {
        // 隐藏 loading
        this.hideLoading();

        const { config, data } = response;

        // 检查业务状态码
        if (data.code === 200 || data.code === 201) {
          // 如果需要完整响应，返回完整的 response
          return config.needResponse ? response : data.data;
        } else {
          // 业务错误
          if (config.enableErrorTips !== false) {
            this.showError(data.message || '请求失败');
          }
          return Promise.reject(new Error(data.message || '请求失败'));
        }
      },
      async (error) => {
        // 隐藏 loading
        this.hideLoading();

        // 请求被取消
        if (axios.isCancel(error)) {
          console.log('请求被取消:', error.message);
          return Promise.reject(error);
        }

        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        if (error.response) {
          const { config, response } = error;
          const { data, status } = response;

          // 处理 401 未授权
          if (status === 401) {
            await this.handleUnauthorized();
            return Promise.reject(error);
          }

          // 处理 Blob 类型响应
          let errorData = data;
          if (config.responseType === 'blob') {
            errorData = await this.blobToJson(data);
          }

          // 全局错误提示
          if (config.enableErrorTips !== false) {
            const message =
              errorData.message ||
              httpStatus[status] ||
              `请求失败: ${config.url}`;
            this.showError(message);
          }

          return Promise.reject(error);
        } else if (error.request) {
          // 请求已经成功发起，但没有收到响应
          const message = error.message || '网络错误，请检查您的网络连接';
          this.showError(message);
          return Promise.reject(error);
        } else {
          // 发生了一些问题导致请求没有发出
          this.showError(error.message || '请求配置错误');
          return Promise.reject(error);
        }
      }
    );
  }

  /**
   * 将 Blob 转换为 JSON
   * @param {Blob} blob - Blob 对象
   * @returns {Promise<Object>}
   */
  blobToJson(blob) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result);
          resolve(data);
        } catch (error) {
          resolve({});
        }
      };
      reader.readAsText(blob);
    });
  }

  /**
   * 通用请求方法
   * @param {string} method - HTTP 方法
   * @param {string} path - 请求路径
   * @param {Object} body - 请求数据
   * @param {Object} ext - 扩展配置
   * @returns {Promise}
   */
  request(method, path, body = {}, ext = {}) {
    const config = {
      url: path,
      method: method.toLowerCase(),
      ...ext
    };

    // GET 请求使用 params，其他请求使用 data
    if (method.toLowerCase() === 'get') {
      config.params = body;
    } else {
      config.data = body;
    }

    return this.http.request(config);
  }

  /**
   * GET 请求
   * @param {string} path - 请求路径
   * @param {Object} params - 查询参数
   * @param {Object} ext - 扩展配置
   * @returns {Promise}
   */
  get(path, params = {}, ext = {}) {
    return this.request('GET', path, params, ext);
  }

  /**
   * POST 请求
   * @param {string} path - 请求路径
   * @param {Object} data - 请求数据
   * @param {Object} ext - 扩展配置
   * @returns {Promise}
   */
  post(path, data = {}, ext = {}) {
    return this.request('POST', path, data, ext);
  }

  /**
   * PUT 请求
   * @param {string} path - 请求路径
   * @param {Object} data - 请求数据
   * @param {Object} ext - 扩展配置
   * @returns {Promise}
   */
  put(path, data = {}, ext = {}) {
    return this.request('PUT', path, data, ext);
  }

  /**
   * DELETE 请求
   * @param {string} path - 请求路径
   * @param {Object} data - 请求数据
   * @param {Object} ext - 扩展配置
   * @returns {Promise}
   */
  delete(path, data = {}, ext = {}) {
    return this.request('DELETE', path, data, ext);
  }

  /**
   * PATCH 请求
   * @param {string} path - 请求路径
   * @param {Object} data - 请求数据
   * @param {Object} ext - 扩展配置
   * @returns {Promise}
   */
  patch(path, data = {}, ext = {}) {
    return this.request('PATCH', path, data, ext);
  }

  /**
   * 上传文件
   * @param {string} path - 请求路径
   * @param {FormData} formData - 表单数据
   * @param {Object} ext - 扩展配置
   * @returns {Promise}
   */
  upload(path, formData, ext = {}) {
    return this.request('POST', path, formData, {
      ...ext,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...ext.headers
      }
    });
  }

  /**
   * 下载文件
   * @param {string} path - 请求路径
   * @param {Object} params - 查询参数
   * @param {Object} ext - 扩展配置
   * @returns {Promise}
   */
  download(path, params = {}, ext = {}) {
    return this.request('GET', path, params, {
      ...ext,
      responseType: 'blob'
    });
  }

  /**
   * 获取 Token（需要根据实际情况实现）
   * @returns {string|null}
   */
  getToken() {
    // 从 localStorage、sessionStorage 或其他地方获取 token
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token') || sessionStorage.getItem('token');
    }
    return null;
  }

  /**
   * 显示加载中（需要根据实际情况实现）
   */
  showLoading() {
    // 可以使用 UI 库的 loading 组件
    // 例如：Element UI 的 Loading.service()
  }

  /**
   * 隐藏加载中（需要根据实际情况实现）
   */
  hideLoading() {
    // 隐藏 loading
  }

  /**
   * 显示错误信息（需要根据实际情况实现）
   * @param {string} message - 错误信息
   */
  showError(message) {
    // 可以使用 UI 库的提示组件
    // 例如：Element UI 的 Message.error()
    console.error('API 错误:', message);
  }

  /**
   * 处理未授权情况（需要根据实际情况实现）
   */
  async handleUnauthorized() {
    // 清除 token
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
    }
    
    // 跳转到登录页
    // 例如：router.push('/login')
    console.warn('未授权，请重新登录');
  }

  /**
   * 刷新 Token（需要根据实际情况实现）
   * @returns {Promise<string>}
   */
  async refreshToken() {
    // 实现 token 刷新逻辑
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    // 调用刷新 token 接口
    // const response = await this.post('/auth/refresh', { refresh_token: refreshToken });
    // return response.access_token;
  }

  /**
   * 获取刷新 Token（需要根据实际情况实现）
   * @returns {string|null}
   */
  getRefreshToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('refresh_token');
    }
    return null;
  }
}

module.exports = BaseService;
