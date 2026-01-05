import { BaseService, ExtOptions } from './base.service';
import { VegRecipeCategoryCreate } from '../models/veg_recipe_categories/VegRecipeCategoryCreate.model';
import { VegRecipeCategoryUpdate } from '../models/veg_recipe_categories/VegRecipeCategoryUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { VegRecipeCategoryStatusUpdate } from '../models/veg_recipe_categories/VegRecipeCategoryStatusUpdate.model';
import { VegRecipeCategoryBatchStatusUpdate } from '../models/veg_recipe_categories/VegRecipeCategoryBatchStatusUpdate.model';

class VegRecipeCategoriesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Veg Recipe Categories
   * @param data any
   */
  listVegRecipeCategories(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/categories`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Veg Recipe Category
   * @param data VegRecipeCategoryCreate
   */
  createVegRecipeCategory(data: VegRecipeCategoryCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/categories`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Veg Recipe Categories Options
   * @param data any
   */
  getVegRecipeCategoriesOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/categories/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Veg Recipe Category
   * @param category_id string | number
   * @param data any
   */
  getVegRecipeCategory(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/categories/${category_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Veg Recipe Category
   * @param category_id string | number
   * @param data VegRecipeCategoryUpdate
   */
  updateVegRecipeCategory(category_id: string | number, data: VegRecipeCategoryUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg-recipe/categories/${category_id}`;
    return this.request<ResponseSchema>('put', url, data, extOptions);
  }

  /**
   * Delete Veg Recipe Category
   * @param category_id string | number
   * @param data any
   */
  deleteVegRecipeCategory(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg-recipe/categories/${category_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Veg Recipe Category Status
   * @param category_id string | number
   * @param data VegRecipeCategoryStatusUpdate
   */
  updateVegRecipeCategoryStatus(category_id: string | number, data: VegRecipeCategoryStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg-recipe/categories/${category_id}/status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Batch Update Veg Recipe Category Status
   * @param data VegRecipeCategoryBatchStatusUpdate
   */
  batchUpdateVegRecipeCategoryStatus(data: VegRecipeCategoryBatchStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/veg-recipe/categories/batch-category-status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Get Category Articles
   * @param category_id string | number
   * @param data any
   */
  getCategoryArticles(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/categories/${category_id}/articles`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new VegRecipeCategoriesService();