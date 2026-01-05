import { BaseService, ExtOptions } from './base.service';
import { LibCategoryCreate } from '../models/library_category/LibCategoryCreate.model';
import { LibCategoryUpdate } from '../models/library_category/LibCategoryUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { LibCategoryStatusUpdate } from '../models/library_category/LibCategoryStatusUpdate.model';
import { LibCategoryBatchStatusUpdate } from '../models/library_category/LibCategoryBatchStatusUpdate.model';

class LibraryCategoryService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get All Categories
   * @param data any
   */
  getAllCategories(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/categories`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Category
   * @param data LibCategoryCreate
   */
  createCategory(data: LibCategoryCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/categories`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Categories Options
   * @param data any
   */
  getCategoriesOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/categories/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Category By Id
   * @param category_id string | number
   * @param data any
   */
  getCategoryById(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/categories/${category_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Category
   * @param category_id string | number
   * @param data LibCategoryUpdate
   */
  updateCategory(category_id: string | number, data: LibCategoryUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/categories/${category_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Category
   * @param category_id string | number
   * @param data any
   */
  deleteCategory(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/library/categories/${category_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Category Status
   * @param category_id string | number
   * @param data LibCategoryStatusUpdate
   */
  updateCategoryStatus(category_id: string | number, data: LibCategoryStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/categories/${category_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Batch Update Category Publish Status
   * @param data LibCategoryBatchStatusUpdate
   */
  batchUpdateCategoryPublishStatus(data: LibCategoryBatchStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/categories/batch-category-status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new LibraryCategoryService();