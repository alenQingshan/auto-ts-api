import { BaseService, ExtOptions } from './base.service';


class ConfigAreaPublicService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Area Variable Public
   * @param data any
   */
  getAreaVariablePublic(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/area_variable`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new ConfigAreaPublicService();