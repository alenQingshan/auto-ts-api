/**
 * API 配置文件
 * 自动生成，请勿手动修改
 */

const API_CONFIG = {
  baseURL: process.env.API_BASE_URL || 'http://localhost:3000/api/v1',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * API 端点配置
 */
const API_ENDPOINTS = {
  // 用户相关
  users: {
    list: '/users',
    detail: (id) => `/users/${id}`,
    create: '/users',
    update: (id) => `/users/${id}`,
    delete: (id) => `/users/${id}`
  },
  // 产品相关
  products: {
    list: '/products',
    detail: (id) => `/products/${id}`,
    create: '/products',
    update: (id) => `/products/${id}`,
    delete: (id) => `/products/${id}`
  },
  // 文件相关
  files: {
    upload: '/files/upload',
    uploadBatch: '/files/upload/batch'
  }
};

module.exports = {
  API_CONFIG,
  API_ENDPOINTS
};
