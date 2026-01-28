const BaseService = require('./base.service');

/**
 * FilesService
 * @extends BaseService
 */
class FilesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * 上传单个文件
   * @param {Object} data - 请求数据
   * @param {Object} extOptions - 扩展选项
   * @returns {Promise<Object>}
   */
  async uploadFile(data, extOptions = {}) {
    const url = `/files/upload`;
    return this.request('POST', url, data, extOptions);
  }

  /**
   * 批量上传文件
   * @param {Object} data - 请求数据
   * @param {Object} extOptions - 扩展选项
   * @returns {Promise<Object>}
   */
  async uploadMultipleFiles(data, extOptions = {}) {
    const url = `/files/upload/batch`;
    return this.request('POST', url, data, extOptions);
  }

}

module.exports = new FilesService();
