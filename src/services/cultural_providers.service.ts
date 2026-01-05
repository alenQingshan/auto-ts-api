import { BaseService, ExtOptions } from './base.service';
import { CulturalProviderCreate } from '../models/cultural_providers/CulturalProviderCreate.model';
import { CulturalProviderUpdate } from '../models/cultural_providers/CulturalProviderUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { CulturalProviderApprovalRequest } from '../models/cultural_providers/CulturalProviderApprovalRequest.model';
import { CulturalProviderFrontendApply } from '../models/cultural_providers/CulturalProviderFrontendApply.model';

class CulturalProvidersService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get All Providers
   * @param data any
   */
  getAllProviders(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Provider
   * @param data CulturalProviderCreate
   */
  createProvider(data: CulturalProviderCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Providers Options
   * @param data any
   */
  getProvidersOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Provider By Id
   * @param provider_id string | number
   * @param data any
   */
  getProviderById(provider_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers/${provider_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Provider
   * @param provider_id string | number
   * @param data CulturalProviderUpdate
   */
  updateProvider(provider_id: string | number, data: CulturalProviderUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers/${provider_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Provider
   * @param provider_id string | number
   * @param data any
   */
  deleteProvider(provider_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/providers/${provider_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Approve Provider
   * @param provider_id string | number
   * @param data any
   */
  approveProvider(provider_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers/${provider_id}/approve`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Reject Provider
   * @param provider_id string | number
   * @param data CulturalProviderApprovalRequest
   */
  rejectProvider(provider_id: string | number, data: CulturalProviderApprovalRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers/${provider_id}/reject`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Update Approval
   * @param provider_id string | number
   * @param data CulturalProviderApprovalRequest
   */
  updateApproval(provider_id: string | number, data: CulturalProviderApprovalRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers/${provider_id}/approval`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Apply Provider
   * @param data CulturalProviderFrontendApply
   */
  applyProvider(data: CulturalProviderFrontendApply, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers/apply`;
    return this.request<any>('post', url, data, extOptions);
  }

}

export default new CulturalProvidersService();