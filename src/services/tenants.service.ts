import { BaseService, ExtOptions } from './base.service';
import { CoreTenantCreate } from '../models/CoreTenantCreate.model';
import { CoreTenantUpdate } from '../models/CoreTenantUpdate.model';
import { ResponseSchema } from '../models/ResponseSchema.model';
import { TenantStatusUpdate } from '../models/TenantStatusUpdate.model';

class TenantsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get All Tenants
   * @param data any
   */
  getAllTenants(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/tenants`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Tenant
   * @param data CoreTenantCreate
   */
  createTenant(data: CoreTenantCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/tenants`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Tenant By Id
   * @param tenant_id string | number
   * @param data any
   */
  getTenantById(tenant_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/tenants/${tenant_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Tenant
   * @param tenant_id string | number
   * @param data CoreTenantUpdate
   */
  updateTenant(tenant_id: string | number, data: CoreTenantUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/tenants/${tenant_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Tenant
   * @param tenant_id string | number
   * @param data any
   */
  deleteTenant(tenant_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/tenants/${tenant_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Tenant Status
   * @param tenant_id string | number
   * @param data TenantStatusUpdate
   */
  updateTenantStatus(tenant_id: string | number, data: TenantStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/tenants/${tenant_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new TenantsService();