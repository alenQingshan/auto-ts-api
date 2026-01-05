import { BaseService, ExtOptions } from './base.service';
import { VegRecipeArticleCreate } from '../models/veg_recipe_articles/VegRecipeArticleCreate.model';
import { VegRecipeArticleUpdate } from '../models/veg_recipe_articles/VegRecipeArticleUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { NewsArticleStatusUpdate } from '../models/news_articles/NewsArticleStatusUpdate.model';
import { VegRecipeArticleBatchPublishStatusUpdate } from '../models/veg_recipe_articles/VegRecipeArticleBatchPublishStatusUpdate.model';

class VegRecipeArticlesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Veg Recipe Articles
   * @param data any
   */
  listVegRecipeArticles(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/articles`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Veg Recipe Article
   * @param data VegRecipeArticleCreate
   */
  createVegRecipeArticle(data: VegRecipeArticleCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/articles`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Veg Recipe Article
   * @param article_id string | number
   * @param data any
   */
  getVegRecipeArticle(article_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/articles/${article_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Veg Recipe Article
   * @param article_id string | number
   * @param data VegRecipeArticleUpdate
   */
  updateVegRecipeArticle(article_id: string | number, data: VegRecipeArticleUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/articles/${article_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Veg Recipe Article
   * @param article_id string | number
   * @param data any
   */
  deleteVegRecipeArticle(article_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg-recipe/articles/${article_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Veg Recipe Article Status
   * @param article_id string | number
   * @param data NewsArticleStatusUpdate
   */
  updateVegRecipeArticleStatus(article_id: string | number, data: NewsArticleStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg-recipe/articles/${article_id}/status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Batch Update Veg Recipe Article Public Status
   * @param data VegRecipeArticleBatchPublishStatusUpdate
   */
  batchUpdateVegRecipeArticlePublicStatus(data: VegRecipeArticleBatchPublishStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/articles/batch-article-status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new VegRecipeArticlesService();