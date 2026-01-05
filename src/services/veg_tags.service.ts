import { BaseService, ExtOptions } from './base.service';
import { VegTagCreate } from '../models/veg_tags/VegTagCreate.model';
import { VegTagUpdate } from '../models/veg_tags/VegTagUpdate.model';
import { VegTagStatusUpdate } from '../models/veg_tags/VegTagStatusUpdate.model';
import { VegTagArticleBind } from '../models/veg_tags/VegTagArticleBind.model';

class VegTagsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Veg Tags
   * @param data any
   */
  listVegTags(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/tags`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Veg Tag
   * @param data VegTagCreate
   */
  createVegTag(data: VegTagCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/tags`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Veg Tags Options
   * @param data any
   */
  getVegTagsOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/tags/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Veg Tag
   * @param tag_id string | number
   * @param data any
   */
  getVegTag(tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/tags/${tag_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Veg Tag
   * @param tag_id string | number
   * @param data VegTagUpdate
   */
  updateVegTag(tag_id: string | number, data: VegTagUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/tags/${tag_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Veg Tag
   * @param tag_id string | number
   * @param data any
   */
  deleteVegTag(tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/tags/${tag_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Veg Tag Status
   * @param tag_id string | number
   * @param data VegTagStatusUpdate
   */
  updateVegTagStatus(tag_id: string | number, data: VegTagStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/tags/${tag_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Batch Bind Veg Articles To Tag
   * @param tag_id string | number
   * @param data VegTagArticleBind
   */
  batchBindVegArticlesToTag(tag_id: string | number, data: VegTagArticleBind, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/tags/${tag_id}/articles`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Batch Unbind Veg Articles From Tag
   * @param tag_id string | number
   * @param data VegTagArticleBind
   */
  batchUnbindVegArticlesFromTag(tag_id: string | number, data: VegTagArticleBind, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/veg/tags/${tag_id}/articles`;
    return this.request<any>('delete', url, data, extOptions);
  }

}

export default new VegTagsService();