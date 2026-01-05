import { BaseService, ExtOptions } from './base.service';
import { NewsArticleCreate } from '../models/news_articles/NewsArticleCreate.model';
import { NewsArticleUpdate } from '../models/news_articles/NewsArticleUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { NewsArticleStatusUpdate } from '../models/news_articles/NewsArticleStatusUpdate.model';
import { NewsArticleBatchPublishStatusUpdate } from '../models/news_articles/NewsArticleBatchPublishStatusUpdate.model';

class NewsArticlesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List News Articles
   * @param data any
   */
  listNewsArticles(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/articles`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create News Article
   * @param data NewsArticleCreate
   */
  createNewsArticle(data: NewsArticleCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/articles`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get News Article
   * @param article_id string | number
   * @param data any
   */
  getNewsArticle(article_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/articles/${article_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update News Article
   * @param article_id string | number
   * @param data NewsArticleUpdate
   */
  updateNewsArticle(article_id: string | number, data: NewsArticleUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/articles/${article_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete News Article
   * @param article_id string | number
   * @param data any
   */
  deleteNewsArticle(article_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/news/articles/${article_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update News Article Status
   * @param article_id string | number
   * @param data NewsArticleStatusUpdate
   */
  updateNewsArticleStatus(article_id: string | number, data: NewsArticleStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/news/articles/${article_id}/status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Batch Update News Article Public Status
   * @param data NewsArticleBatchPublishStatusUpdate
   */
  batchUpdateNewsArticlePublicStatus(data: NewsArticleBatchPublishStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/articles/batch-article-status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new NewsArticlesService();