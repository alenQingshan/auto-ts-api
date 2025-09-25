import { BaseService, ExtOptions } from './base.service';


class FilesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Upload File
   * @param data any
   */
  uploadFile(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/api/v1/files/upload`;
    return this.request<any>('post', url, data, extOptions);
  }

}

export default new FilesService();