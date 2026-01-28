const BaseService = require('./base.service');

/**
 * ProductsService
 * @extends BaseService
 */
class ProductsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * 获取产品列表
   * @param {Object} data - 请求数据
   * @param {Object} extOptions - 扩展选项
   * @returns {Promise<Object>}
   */
  async getProductList(data, extOptions = {}) {
    const url = `/products`;
    return this.request('GET', url, data, extOptions);
  }

  /**
   * 创建新产品
   * @param {ProductCreate} data - 请求数据
   * @param {Object} extOptions - 扩展选项
   * @returns {Promise<Object>}
   */
  async createProduct(data, extOptions = {}) {
    const url = `/products`;
    return this.request('POST', url, data, extOptions);
  }

  /**
   * 更新产品信息
   * @param {string|number} productId - URL 参数
   * @param {ProductUpdate} data - 请求数据
   * @param {Object} extOptions - 扩展选项
   * @returns {Promise<Object>}
   */
  async updateProduct(productId, data, extOptions = {}) {
    const url = `/products/${productId}`;
    return this.request('PUT', url, data, extOptions);
  }

  /**
   * 删除产品
   * @param {string|number} productId - URL 参数
   * @param {Object} data - 请求数据
   * @param {Object} extOptions - 扩展选项
   * @returns {Promise<Object>}
   */
  async deleteProduct(productId, data, extOptions = {}) {
    const url = `/products/${productId}`;
    return this.request('DELETE', url, data, extOptions);
  }

}

module.exports = new ProductsService();
