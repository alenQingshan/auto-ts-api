import { BaseService, ExtOptions } from './base.service';
import { VegArticleCreate } from '../models/veg_articles/VegArticleCreate.model';
import { VegArticleUpdate } from '../models/veg_articles/VegArticleUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { NewsArticleStatusUpdate } from '../models/news_articles/NewsArticleStatusUpdate.model';
import { VegArticleBatchPublishStatusUpdate } from '../models/veg_articles/VegArticleBatchPublishStatusUpdate.model';

class VegArticlesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Veg Articles
   * @param data any
   */
  listVegArticles(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/articles`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Veg Article
   * @param data VegArticleCreate
   */
  createVegArticle(data: VegArticleCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/articles`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Veg Article
   * @param article_id string | number
   * @param data any
   */
  getVegArticle(article_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/articles/${article_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Veg Article
   * @param article_id string | number
   * @param data VegArticleUpdate
   */
  updateVegArticle(article_id: string | number, data: VegArticleUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/articles/${article_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Veg Article
   * @param article_id string | number
   * @param data any
   */
  deleteVegArticle(article_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg/articles/${article_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Veg Article Status
   * @param article_id string | number
   * @param data NewsArticleStatusUpdate
   */
  updateVegArticleStatus(article_id: string | number, data: NewsArticleStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg/articles/${article_id}/status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Batch Update Veg Article Public Status
   * @param data VegArticleBatchPublishStatusUpdate
   */
  batchUpdateVegArticlePublicStatus(data: VegArticleBatchPublishStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/articles/batch-article-status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new VegArticlesService();