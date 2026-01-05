import { BaseService, ExtOptions } from './base.service';
import { NewsCategoryCreate } from '../models/news_categories/NewsCategoryCreate.model';
import { NewsCategoryUpdate } from '../models/news_categories/NewsCategoryUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { NewsCategoryStatusUpdate } from '../models/news_categories/NewsCategoryStatusUpdate.model';
import { NewsCategoryBatchStatusUpdate } from '../models/news_categories/NewsCategoryBatchStatusUpdate.model';

class NewsCategoriesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List News Categories
   * @param data any
   */
  listNewsCategories(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/categories`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create News Category
   * @param data NewsCategoryCreate
   */
  createNewsCategory(data: NewsCategoryCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/categories`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get News Categories Options
   * @param data any
   */
  getNewsCategoriesOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/categories/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get News Category
   * @param category_id string | number
   * @param data any
   */
  getNewsCategory(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/categories/${category_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update News Category
   * @param category_id string | number
   * @param data NewsCategoryUpdate
   */
  updateNewsCategory(category_id: string | number, data: NewsCategoryUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/news/categories/${category_id}`;
    return this.request<ResponseSchema>('put', url, data, extOptions);
  }

  /**
   * Delete News Category
   * @param category_id string | number
   * @param data any
   */
  deleteNewsCategory(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/news/categories/${category_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update News Category Status
   * @param category_id string | number
   * @param data NewsCategoryStatusUpdate
   */
  updateNewsCategoryStatus(category_id: string | number, data: NewsCategoryStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/news/categories/${category_id}/status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Batch Update News Category Status
   * @param data NewsCategoryBatchStatusUpdate
   */
  batchUpdateNewsCategoryStatus(data: NewsCategoryBatchStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/news/categories/batch-category-status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Get Category Articles
   * @param category_id string | number
   * @param data any
   */
  getCategoryArticles(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/categories/${category_id}/articles`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new NewsCategoriesService();