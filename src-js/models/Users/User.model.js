/**
 * User 模型
 * @property {number|null} id - id
 * @property {string|null} username - username
 * @property {string|null} email - email
 * @property {string|null} full_name - full_name
 * @property {string|null} avatar - avatar
 * @property {string|null} status - status
 * @property {string|null} created_at - created_at
 * @property {string|null} updated_at - updated_at
 */
class User {
  constructor(data = {}) {
    this.id = data.id !== undefined ? data.id : null;
    this.username = data.username !== undefined ? data.username : null;
    this.email = data.email !== undefined ? data.email : null;
    this.full_name = data.full_name !== undefined ? data.full_name : null;
    this.avatar = data.avatar !== undefined ? data.avatar : null;
    this.status = data.status !== undefined ? data.status : null;
    this.created_at = data.created_at !== undefined ? data.created_at : null;
    this.updated_at = data.updated_at !== undefined ? data.updated_at : null;

  }

  /**
   * 从响应数据创建实例
   * @param {Object} data - 响应数据
   * @returns {User}
   */
  static fromResponse(data) {
    return new User(data);
  }

  /**
   * 转换为 JSON 对象
   * @returns {Object}
   */
  toJSON() {
    return { ...this };
  }
}

module.exports = User;
