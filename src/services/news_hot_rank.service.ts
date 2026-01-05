import { BaseService, ExtOptions } from './base.service';
import { NewsHotRankSetRequest } from '../models/news_hot_rank/NewsHotRankSetRequest.model';
import { NewsHotRankUpdateRequest } from '../models/news_hot_rank/NewsHotRankUpdateRequest.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { NewsHotRankStatusUpdate } from '../models/news_hot_rank/NewsHotRankStatusUpdate.model';

class NewsHotRankService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Set Hot Rank
   * @param article_id string | number
   * @param data NewsHotRankSetRequest
   */
  setHotRank(article_id: string | number, data: NewsHotRankSetRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/${article_id}/hot-rank`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Update Hot Rank End At
   * @param article_id string | number
   * @param data NewsHotRankUpdateRequest
   */
  updateHotRankEndAt(article_id: string | number, data: NewsHotRankUpdateRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/${article_id}/hot-rank`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Cancel Hot Rank
   * @param article_id string | number
   * @param data any
   */
  cancelHotRank(article_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/${article_id}/hot-rank/cancel`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Delete Hot Rank
   * @param article_id string | number
   * @param data any
   */
  deleteHotRank(article_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/news/${article_id}/hot-rank/cancel`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * List Hot Ranks
   * @param data any
   */
  listHotRanks(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/hot-ranks`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Reorder Hot Ranks By Orders
   * @param data NewsHotRankReorderItem[]
   */
  reorderHotRanksByOrders(data: NewsHotRankReorderItem[], extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/hot-ranks/reorder-by-orders`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Update Hot Rank Status
   * @param article_id string | number
   * @param data NewsHotRankStatusUpdate
   */
  updateHotRankStatus(article_id: string | number, data: NewsHotRankStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/articles/${article_id}/hot-rank-status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new NewsHotRankService();