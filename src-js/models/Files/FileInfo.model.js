/**
 * FileInfo 模型
 * @property {number|null} id - id
 * @property {string|null} filename - filename
 * @property {string|null} original_filename - original_filename
 * @property {string|null} file_url - file_url
 * @property {number|null} file_size - 文件大小（字节）
 * @property {string|null} mime_type - mime_type
 * @property {string|null} category - category
 * @property {string|null} uploaded_at - uploaded_at
 */
class FileInfo {
  constructor(data = {}) {
    this.id = data.id !== undefined ? data.id : null;
    this.filename = data.filename !== undefined ? data.filename : null;
    this.original_filename = data.original_filename !== undefined ? data.original_filename : null;
    this.file_url = data.file_url !== undefined ? data.file_url : null;
    this.file_size = data.file_size !== undefined ? data.file_size : null;
    this.mime_type = data.mime_type !== undefined ? data.mime_type : null;
    this.category = data.category !== undefined ? data.category : null;
    this.uploaded_at = data.uploaded_at !== undefined ? data.uploaded_at : null;

  }

  /**
   * 从响应数据创建实例
   * @param {Object} data - 响应数据
   * @returns {FileInfo}
   */
  static fromResponse(data) {
    return new FileInfo(data);
  }

  /**
   * 转换为 JSON 对象
   * @returns {Object}
   */
  toJSON() {
    return { ...this };
  }
}

module.exports = FileInfo;
