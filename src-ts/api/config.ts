/**
 * API 配置文件
 * 自动生成，请勿手动修改
 */

export const API_CONFIG = {
  baseURL: process.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * API 端点配置
 */
export const API_ENDPOINTS = {
  // 用户相关
  users: {
    list: '/users',
    detail: (id: number | string) => `/users/${id}`,
    create: '/users',
    update: (id: number | string) => `/users/${id}`,
    delete: (id: number | string) => `/users/${id}`
  },
  // 产品相关
  products: {
    list: '/products',
    detail: (id: number | string) => `/products/${id}`,
    create: '/products',
    update: (id: number | string) => `/products/${id}`,
    delete: (id: number | string) => `/products/${id}`
  },
  // 文件相关
  files: {
    upload: '/files/upload',
    uploadBatch: '/files/upload/batch'
  }
};

export default API_CONFIG;
