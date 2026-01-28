/**
 * Error 模型
 * @property {number|null} code - code
 * @property {string|null} message - message
 * @property {Object|null} details - details
 */
class Error {
  constructor(data = {}) {
    this.code = data.code !== undefined ? data.code : null;
    this.message = data.message !== undefined ? data.message : null;
    this.details = data.details !== undefined ? data.details : null;

  }

  /**
   * 从响应数据创建实例
   * @param {Object} data - 响应数据
   * @returns {Error}
   */
  static fromResponse(data) {
    return new Error(data);
  }

  /**
   * 转换为 JSON 对象
   * @returns {Object}
   */
  toJSON() {
    return { ...this };
  }
}

module.exports = Error;
