import { BaseService, ExtOptions } from './base.service';
import { CulturalSpecCreate } from '../models/cultural_product_specs/CulturalSpecCreate.model';
import { CulturalSpecUpdate } from '../models/cultural_product_specs/CulturalSpecUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { CulturalSpecStatusUpdate } from '../models/cultural_product_specs/CulturalSpecStatusUpdate.model';
import { CulturalSpecValueCreate } from '../models/cultural_product_specs/CulturalSpecValueCreate.model';
import { CulturalSpecValueUpdate } from '../models/cultural_product_specs/CulturalSpecValueUpdate.model';

class CulturalProductSpecsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Specs
   * @param data any
   */
  listSpecs(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/product-specs`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Spec
   * @param data CulturalSpecCreate
   */
  createSpec(data: CulturalSpecCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/product-specs`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Specs Options
   * @param data any
   */
  getSpecsOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/product-specs/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Spec By Id
   * @param spec_id string | number
   * @param data any
   */
  getSpecById(spec_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/product-specs/${spec_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Spec
   * @param spec_id string | number
   * @param data CulturalSpecUpdate
   */
  updateSpec(spec_id: string | number, data: CulturalSpecUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/product-specs/${spec_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Spec
   * @param spec_id string | number
   * @param data any
   */
  deleteSpec(spec_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/product-specs/${spec_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Spec Status
   * @param spec_id string | number
   * @param data CulturalSpecStatusUpdate
   */
  updateSpecStatus(spec_id: string | number, data: CulturalSpecStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/product-specs/${spec_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Get Spec Values Options
   * @param spec_id string | number
   * @param data any
   */
  getSpecValuesOptions(spec_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/product-specs/${spec_id}/values/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * List Spec Values
   * @param spec_id string | number
   * @param data any
   */
  listSpecValues(spec_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/product-specs/${spec_id}/values`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Spec Value
   * @param spec_id string | number
   * @param data CulturalSpecValueCreate
   */
  createSpecValue(spec_id: string | number, data: CulturalSpecValueCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/product-specs/${spec_id}/values`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Update Spec Value
   * @param spec_id string | number
   * @param value_id string | number
   * @param data CulturalSpecValueUpdate
   */
  updateSpecValue(spec_id: string | number, value_id: string | number, data: CulturalSpecValueUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/product-specs/${spec_id}/values/${value_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Spec Value
   * @param spec_id string | number
   * @param value_id string | number
   * @param data any
   */
  deleteSpecValue(spec_id: string | number, value_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/product-specs/${spec_id}/values/${value_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

}

export default new CulturalProductSpecsService();