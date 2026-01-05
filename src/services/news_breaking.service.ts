import { BaseService, ExtOptions } from './base.service';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { NewsBreakingStatusUpdate } from '../models/news_breaking/NewsBreakingStatusUpdate.model';

class NewsBreakingService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Set Breaking
   * @param article_id string | number
   * @param data any
   */
  setBreaking(article_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/${article_id}/breaking`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Cancel Breaking
   * @param article_id string | number
   * @param data any
   */
  cancelBreaking(article_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/${article_id}/breaking/cancel`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Delete Breaking
   * @param article_id string | number
   * @param data any
   */
  deleteBreaking(article_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/news/${article_id}/breaking/cancel`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * List Breakings
   * @param data any
   */
  listBreakings(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/breakings`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Reorder Breakings By Orders
   * @param data NewsBreakingReorderItem[]
   */
  reorderBreakingsByOrders(data: NewsBreakingReorderItem[], extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/breakings/reorder-by-orders`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Update Breaking Status
   * @param article_id string | number
   * @param data NewsBreakingStatusUpdate
   */
  updateBreakingStatus(article_id: string | number, data: NewsBreakingStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/articles/${article_id}/breaking-status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new NewsBreakingService();