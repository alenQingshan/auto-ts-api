import { BaseService, ExtOptions } from './base.service';


class ResourcesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Upload Resources Image
   * @param data any
   */
  uploadResourcesImage(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/resources/images`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Upload Resources File
   * @param data any
   */
  uploadResourcesFile(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/resources/files`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Generate Image Thumbnails
   * @param image_path string | number
   * @param data any
   */
  generateImageThumbnails(image_path: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/resources/images/${image_path}/thumbs`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Upload File
   * @param data any
   */
  uploadFile(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/storage/upload`;
    return this.request<any>('post', url, data, extOptions);
  }

}

export default new ResourcesService();