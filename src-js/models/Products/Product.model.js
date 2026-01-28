/**
 * Product 模型
 * @property {number|null} id - id
 * @property {string|null} name - name
 * @property {string|null} description - description
 * @property {number|null} price - price
 * @property {string|null} category - category
 * @property {number|null} stock - stock
 * @property {Array<string>|null} images - images
 * @property {string|null} status - status
 * @property {string|null} created_at - created_at
 * @property {string|null} updated_at - updated_at
 */
class Product {
  constructor(data = {}) {
    this.id = data.id !== undefined ? data.id : null;
    this.name = data.name !== undefined ? data.name : null;
    this.description = data.description !== undefined ? data.description : null;
    this.price = data.price !== undefined ? data.price : null;
    this.category = data.category !== undefined ? data.category : null;
    this.stock = data.stock !== undefined ? data.stock : null;
    this.images = data.images !== undefined ? data.images : null;
    this.status = data.status !== undefined ? data.status : null;
    this.created_at = data.created_at !== undefined ? data.created_at : null;
    this.updated_at = data.updated_at !== undefined ? data.updated_at : null;

  }

  /**
   * 从响应数据创建实例
   * @param {Object} data - 响应数据
   * @returns {Product}
   */
  static fromResponse(data) {
    return new Product(data);
  }

  /**
   * 转换为 JSON 对象
   * @returns {Object}
   */
  toJSON() {
    return { ...this };
  }
}

module.exports = Product;
