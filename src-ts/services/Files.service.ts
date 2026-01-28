import { BaseService, ExtOptions } from './base.service';


class FilesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * 上传单个文件
   * @param data any
   */
  uploadFile(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/files/upload`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * 批量上传文件
   * @param data any
   */
  uploadMultipleFiles(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/files/upload/batch`;
    return this.request<any>('post', url, data, extOptions);
  }

}

export default new FilesService();