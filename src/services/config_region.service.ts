import { BaseService, ExtOptions } from './base.service';
import { PublishRegionCreate } from '../models/config_region/PublishRegionCreate.model';
import { PublishRegionUpdate } from '../models/config_region/PublishRegionUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { PublishRegionStatusUpdate } from '../models/config_region/PublishRegionStatusUpdate.model';
import { PublishRegionAreasUpdate } from '../models/config_region/PublishRegionAreasUpdate.model';
import { PublishRegionCheckRequest } from '../models/config_region/PublishRegionCheckRequest.model';

class ConfigRegionService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Publish Regions
   * @param data any
   */
  listPublishRegions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/publish-regions`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Publish Region
   * @param data PublishRegionCreate
   */
  createPublishRegion(data: PublishRegionCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/publish-regions`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Publish Regions Options
   * @param data any
   */
  getPublishRegionsOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/publish-regions/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Publish Region
   * @param region_id string | number
   * @param data any
   */
  getPublishRegion(region_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/publish-regions/${region_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Publish Region
   * @param region_id string | number
   * @param data PublishRegionUpdate
   */
  updatePublishRegion(region_id: string | number, data: PublishRegionUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/publish-regions/${region_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Publish Region
   * @param region_id string | number
   * @param data any
   */
  deletePublishRegion(region_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/conf/publish-regions/${region_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Publish Region Status
   * @param region_id string | number
   * @param data PublishRegionStatusUpdate
   */
  updatePublishRegionStatus(region_id: string | number, data: PublishRegionStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/publish-regions/${region_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Save Publish Region Areas
   * @param region_id string | number
   * @param data PublishRegionAreasUpdate
   */
  savePublishRegionAreas(region_id: string | number, data: PublishRegionAreasUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/conf/publish-regions/${region_id}/areas`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

  /**
   * Get Publish Region Areas
   * @param region_id string | number
   * @param data any
   */
  getPublishRegionAreas(region_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/publish-regions/${region_id}/areas`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Check Publish Region
   * @param data PublishRegionCheckRequest
   */
  checkPublishRegion(data: PublishRegionCheckRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/publish-regions/check`;
    return this.request<any>('post', url, data, extOptions);
  }

}

export default new ConfigRegionService();