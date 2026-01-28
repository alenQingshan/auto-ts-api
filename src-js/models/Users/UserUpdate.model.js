/**
 * UserUpdate 模型
 * @property {string|null} email - email
 * @property {string|null} full_name - full_name
 * @property {string|null} avatar - avatar
 * @property {string|null} status - status
 */
class UserUpdate {
  constructor(data = {}) {
    this.email = data.email !== undefined ? data.email : null;
    this.full_name = data.full_name !== undefined ? data.full_name : null;
    this.avatar = data.avatar !== undefined ? data.avatar : null;
    this.status = data.status !== undefined ? data.status : null;

  }

  /**
   * 从响应数据创建实例
   * @param {Object} data - 响应数据
   * @returns {UserUpdate}
   */
  static fromResponse(data) {
    return new UserUpdate(data);
  }

  /**
   * 转换为 JSON 对象
   * @returns {Object}
   */
  toJSON() {
    return { ...this };
  }
}

module.exports = UserUpdate;
