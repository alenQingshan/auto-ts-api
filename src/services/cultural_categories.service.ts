import { BaseService, ExtOptions } from './base.service';
import { CulturalCategoryCreate } from '../models/cultural_categories/CulturalCategoryCreate.model';
import { CulturalCategoryUpdate } from '../models/cultural_categories/CulturalCategoryUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { CulturalCategoryStatusUpdate } from '../models/cultural_categories/CulturalCategoryStatusUpdate.model';
import { CulturalCategoryBatchStatusUpdate } from '../models/cultural_categories/CulturalCategoryBatchStatusUpdate.model';

class CulturalCategoriesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Cultural Categories
   * @param data any
   */
  listCulturalCategories(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/categories`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Cultural Category
   * @param data CulturalCategoryCreate
   */
  createCulturalCategory(data: CulturalCategoryCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/categories`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Cultural Categories Options
   * @param data any
   */
  getCulturalCategoriesOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/categories/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Cultural Category
   * @param category_id string | number
   * @param data any
   */
  getCulturalCategory(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/categories/${category_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Cultural Category
   * @param category_id string | number
   * @param data CulturalCategoryUpdate
   */
  updateCulturalCategory(category_id: string | number, data: CulturalCategoryUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/categories/${category_id}`;
    return this.request<ResponseSchema>('put', url, data, extOptions);
  }

  /**
   * Delete Cultural Category
   * @param category_id string | number
   * @param data any
   */
  deleteCulturalCategory(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/categories/${category_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Cultural Category Status
   * @param category_id string | number
   * @param data CulturalCategoryStatusUpdate
   */
  updateCulturalCategoryStatus(category_id: string | number, data: CulturalCategoryStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/categories/${category_id}/status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Batch Update Cultural Category Status
   * @param data CulturalCategoryBatchStatusUpdate
   */
  batchUpdateCulturalCategoryStatus(data: CulturalCategoryBatchStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/categories/batch-category-status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

}

export default new CulturalCategoriesService();