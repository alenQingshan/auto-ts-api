const BaseService = require('./base.service');

/**
 * UsersService
 * @extends BaseService
 */
class UsersService extends BaseService {
  constructor() {
    super();
  }

  /**
   * 获取用户列表
   * @param {Object} data - 请求数据
   * @param {Object} extOptions - 扩展选项
   * @returns {Promise<Object>}
   */
  async getUserList(data, extOptions = {}) {
    const url = `/users`;
    return this.request('GET', url, data, extOptions);
  }

  /**
   * 创建新用户
   * @param {UserCreate} data - 请求数据
   * @param {Object} extOptions - 扩展选项
   * @returns {Promise<Object>}
   */
  async createUser(data, extOptions = {}) {
    const url = `/users`;
    return this.request('POST', url, data, extOptions);
  }

  /**
   * 获取用户详情
   * @param {string|number} userId - URL 参数
   * @param {Object} data - 请求数据
   * @param {Object} extOptions - 扩展选项
   * @returns {Promise<Object>}
   */
  async getUserById(userId, data, extOptions = {}) {
    const url = `/users/${userId}`;
    return this.request('GET', url, data, extOptions);
  }

  /**
   * 更新用户信息
   * @param {string|number} userId - URL 参数
   * @param {UserUpdate} data - 请求数据
   * @param {Object} extOptions - 扩展选项
   * @returns {Promise<Object>}
   */
  async updateUser(userId, data, extOptions = {}) {
    const url = `/users/${userId}`;
    return this.request('PUT', url, data, extOptions);
  }

  /**
   * 删除用户
   * @param {string|number} userId - URL 参数
   * @param {Object} data - 请求数据
   * @param {Object} extOptions - 扩展选项
   * @returns {Promise<Object>}
   */
  async deleteUser(userId, data, extOptions = {}) {
    const url = `/users/${userId}`;
    return this.request('DELETE', url, data, extOptions);
  }

}

module.exports = new UsersService();
