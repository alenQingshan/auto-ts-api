import { BaseService, ExtOptions } from './base.service';
import { VegCategoryCreate } from '../models/veg_categories/VegCategoryCreate.model';
import { VegCategoryUpdate } from '../models/veg_categories/VegCategoryUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { VegCategoryStatusUpdate } from '../models/veg_categories/VegCategoryStatusUpdate.model';
import { VegCategoryBatchStatusUpdate } from '../models/veg_categories/VegCategoryBatchStatusUpdate.model';

class VegCategoriesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Veg Categories
   * @param data any
   */
  listVegCategories(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/categories`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Veg Category
   * @param data VegCategoryCreate
   */
  createVegCategory(data: VegCategoryCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/categories`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Veg Categories Options
   * @param data any
   */
  getVegCategoriesOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/categories/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Veg Category
   * @param category_id string | number
   * @param data any
   */
  getVegCategory(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/categories/${category_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Veg Category
   * @param category_id string | number
   * @param data VegCategoryUpdate
   */
  updateVegCategory(category_id: string | number, data: VegCategoryUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg/categories/${category_id}`;
    return this.request<ResponseSchema>('put', url, data, extOptions);
  }

  /**
   * Delete Veg Category
   * @param category_id string | number
   * @param data any
   */
  deleteVegCategory(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg/categories/${category_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Veg Category Status
   * @param category_id string | number
   * @param data VegCategoryStatusUpdate
   */
  updateVegCategoryStatus(category_id: string | number, data: VegCategoryStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg/categories/${category_id}/status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Batch Update Veg Category Status
   * @param data VegCategoryBatchStatusUpdate
   */
  batchUpdateVegCategoryStatus(data: VegCategoryBatchStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg/categories/batch-category-status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Get Category Articles
   * @param category_id string | number
   * @param data any
   */
  getCategoryArticles(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/categories/${category_id}/articles`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new VegCategoriesService();