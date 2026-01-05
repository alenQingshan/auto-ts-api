import { BaseService, ExtOptions } from './base.service';


class RecommendationService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Users Info
   * @param data any
   */
  getUsersInfo(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/internal/reco/users/info`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get News Articles
   * @param data any
   */
  getNewsArticles(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/internal/reco/news/articles`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Area Variable
   * @param data any
   */
  getAreaVariable(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/internal/reco/area_variable`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new RecommendationService();