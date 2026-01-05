import { BaseService, ExtOptions } from './base.service';
import { CulturalTagCreate } from '../models/cultural_tags/CulturalTagCreate.model';
import { CulturalTagUpdate } from '../models/cultural_tags/CulturalTagUpdate.model';
import { CulturalTagStatusUpdate } from '../models/cultural_tags/CulturalTagStatusUpdate.model';
import { CulturalTagProductsUpdate } from '../models/cultural_tags/CulturalTagProductsUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';

class CulturalTagsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Cultural Tags
   * @param data any
   */
  listCulturalTags(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/tags`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Cultural Tag
   * @param data CulturalTagCreate
   */
  createCulturalTag(data: CulturalTagCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/tags`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Cultural Tags Options
   * @param data any
   */
  getCulturalTagsOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/tags/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Cultural Tag
   * @param tag_id string | number
   * @param data any
   */
  getCulturalTag(tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/tags/${tag_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Cultural Tag
   * @param tag_id string | number
   * @param data CulturalTagUpdate
   */
  updateCulturalTag(tag_id: string | number, data: CulturalTagUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/tags/${tag_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Cultural Tag
   * @param tag_id string | number
   * @param data any
   */
  deleteCulturalTag(tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/tags/${tag_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Cultural Tag Status
   * @param tag_id string | number
   * @param data CulturalTagStatusUpdate
   */
  updateCulturalTagStatus(tag_id: string | number, data: CulturalTagStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/tags/${tag_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Batch Bind Products To Tag
   * @param tag_id string | number
   * @param data CulturalTagProductsUpdate
   */
  batchBindProductsToTag(tag_id: string | number, data: CulturalTagProductsUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/tags/${tag_id}/products`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

  /**
   * Batch Unbind Products From Tag
   * @param tag_id string | number
   * @param data CulturalTagProductsUpdate
   */
  batchUnbindProductsFromTag(tag_id: string | number, data: CulturalTagProductsUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/tags/${tag_id}/products`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

}

export default new CulturalTagsService();