/**
 * UserCreate 模型
 * @property {string} username - username
 * @property {string} email - email
 * @property {string} password - password
 * @property {string|null} full_name - full_name
 */
class UserCreate {
  constructor(data = {}) {
    this.username = data.username !== undefined ? data.username : null;
    this.email = data.email !== undefined ? data.email : null;
    this.password = data.password !== undefined ? data.password : null;
    this.full_name = data.full_name !== undefined ? data.full_name : null;

  }

  /**
   * 从响应数据创建实例
   * @param {Object} data - 响应数据
   * @returns {UserCreate}
   */
  static fromResponse(data) {
    return new UserCreate(data);
  }

  /**
   * 转换为 JSON 对象
   * @returns {Object}
   */
  toJSON() {
    return { ...this };
  }
}

module.exports = UserCreate;
