import { BaseService, ExtOptions } from './base.service';
import { VegRecipeTagCreate } from '../models/veg_recipe_tags/VegRecipeTagCreate.model';
import { VegRecipeTagUpdate } from '../models/veg_recipe_tags/VegRecipeTagUpdate.model';
import { VegRecipeTagStatusUpdate } from '../models/veg_recipe_tags/VegRecipeTagStatusUpdate.model';
import { VegRecipeTagArticleBind } from '../models/veg_recipe_tags/VegRecipeTagArticleBind.model';

class VegRecipeTagsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Veg Recipe Tags
   * @param data any
   */
  listVegRecipeTags(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/tags`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Veg Recipe Tag
   * @param data VegRecipeTagCreate
   */
  createVegRecipeTag(data: VegRecipeTagCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/tags`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Veg Recipe Tags Options
   * @param data any
   */
  getVegRecipeTagsOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/tags/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Veg Recipe Tag
   * @param tag_id string | number
   * @param data any
   */
  getVegRecipeTag(tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/tags/${tag_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Veg Recipe Tag
   * @param tag_id string | number
   * @param data VegRecipeTagUpdate
   */
  updateVegRecipeTag(tag_id: string | number, data: VegRecipeTagUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/tags/${tag_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Veg Recipe Tag
   * @param tag_id string | number
   * @param data any
   */
  deleteVegRecipeTag(tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/tags/${tag_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Veg Recipe Tag Status
   * @param tag_id string | number
   * @param data VegRecipeTagStatusUpdate
   */
  updateVegRecipeTagStatus(tag_id: string | number, data: VegRecipeTagStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/tags/${tag_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Batch Bind Veg Recipe Articles To Tag
   * @param tag_id string | number
   * @param data VegRecipeTagArticleBind
   */
  batchBindVegRecipeArticlesToTag(tag_id: string | number, data: VegRecipeTagArticleBind, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/tags/${tag_id}/articles`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Batch Unbind Veg Recipe Articles From Tag
   * @param tag_id string | number
   * @param data VegRecipeTagArticleBind
   */
  batchUnbindVegRecipeArticlesFromTag(tag_id: string | number, data: VegRecipeTagArticleBind, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg-recipe/tags/${tag_id}/articles`;
    return this.request<any>('delete', url, data, extOptions);
  }

}

export default new VegRecipeTagsService();