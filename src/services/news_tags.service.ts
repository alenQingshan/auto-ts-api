import { BaseService, ExtOptions } from './base.service';
import { NewsTagCreate } from '../models/news_tags/NewsTagCreate.model';
import { NewsTagUpdate } from '../models/news_tags/NewsTagUpdate.model';
import { NewsTagStatusUpdate } from '../models/news_tags/NewsTagStatusUpdate.model';
import { NewsTagArticleBind } from '../models/news_tags/NewsTagArticleBind.model';

class NewsTagsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List News Tags
   * @param data any
   */
  listNewsTags(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/tags`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create News Tag
   * @param data NewsTagCreate
   */
  createNewsTag(data: NewsTagCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/tags`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get News Tags Options
   * @param data any
   */
  getNewsTagsOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/tags/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get News Tag
   * @param tag_id string | number
   * @param data any
   */
  getNewsTag(tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/tags/${tag_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update News Tag
   * @param tag_id string | number
   * @param data NewsTagUpdate
   */
  updateNewsTag(tag_id: string | number, data: NewsTagUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/tags/${tag_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete News Tag
   * @param tag_id string | number
   * @param data any
   */
  deleteNewsTag(tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/tags/${tag_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update News Tag Status
   * @param tag_id string | number
   * @param data NewsTagStatusUpdate
   */
  updateNewsTagStatus(tag_id: string | number, data: NewsTagStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/tags/${tag_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Batch Bind News Articles To Tag
   * @param tag_id string | number
   * @param data NewsTagArticleBind
   */
  batchBindNewsArticlesToTag(tag_id: string | number, data: NewsTagArticleBind, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/tags/${tag_id}/articles`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Batch Unbind News Articles From Tag
   * @param tag_id string | number
   * @param data NewsTagArticleBind
   */
  batchUnbindNewsArticlesFromTag(tag_id: string | number, data: NewsTagArticleBind, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/tags/${tag_id}/articles`;
    return this.request<any>('delete', url, data, extOptions);
  }

}

export default new NewsTagsService();