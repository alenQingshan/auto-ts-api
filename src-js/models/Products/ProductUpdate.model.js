/**
 * ProductUpdate 模型
 * @property {string|null} name - name
 * @property {string|null} description - description
 * @property {number|null} price - price
 * @property {string|null} category - category
 * @property {number|null} stock - stock
 * @property {Array<string>|null} images - images
 * @property {string|null} status - status
 */
class ProductUpdate {
  constructor(data = {}) {
    this.name = data.name !== undefined ? data.name : null;
    this.description = data.description !== undefined ? data.description : null;
    this.price = data.price !== undefined ? data.price : null;
    this.category = data.category !== undefined ? data.category : null;
    this.stock = data.stock !== undefined ? data.stock : null;
    this.images = data.images !== undefined ? data.images : null;
    this.status = data.status !== undefined ? data.status : null;

  }

  /**
   * 从响应数据创建实例
   * @param {Object} data - 响应数据
   * @returns {ProductUpdate}
   */
  static fromResponse(data) {
    return new ProductUpdate(data);
  }

  /**
   * 转换为 JSON 对象
   * @returns {Object}
   */
  toJSON() {
    return { ...this };
  }
}

module.exports = ProductUpdate;
