import { BaseService, ExtOptions } from './base.service';
import { CoreTenantCreate } from '../models/tenants/CoreTenantCreate.model';
import { CoreTenantUpdate } from '../models/tenants/CoreTenantUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { TenantStatusUpdate } from '../models/tenants/TenantStatusUpdate.model';
import { TenantDomainCreate } from '../models/tenants/TenantDomainCreate.model';

class TenantsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get All Tenants
   * @param data any
   */
  getAllTenants(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/tenants`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Tenant
   * @param data CoreTenantCreate
   */
  createTenant(data: CoreTenantCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/tenants`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Active Tenants
   * @param data any
   */
  getActiveTenants(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/tenants/actives`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Tenant By Id
   * @param tenant_id string | number
   * @param data any
   */
  getTenantById(tenant_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/tenants/${tenant_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Tenant
   * @param tenant_id string | number
   * @param data CoreTenantUpdate
   */
  updateTenant(tenant_id: string | number, data: CoreTenantUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/tenants/${tenant_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Tenant
   * @param tenant_id string | number
   * @param data any
   */
  deleteTenant(tenant_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/core/tenants/${tenant_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Tenant Status
   * @param tenant_id string | number
   * @param data TenantStatusUpdate
   */
  updateTenantStatus(tenant_id: string | number, data: TenantStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/tenants/${tenant_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Add Tenant Domain
   * @param tenant_id string | number
   * @param data TenantDomainCreate
   */
  addTenantDomain(tenant_id: string | number, data: TenantDomainCreate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/core/tenants/${tenant_id}/domains`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

  /**
   * Delete Tenant Domain
   * @param tenant_id string | number
   * @param domain_id string | number
   * @param data any
   */
  deleteTenantDomain(tenant_id: string | number, domain_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/core/tenants/${tenant_id}/domains/${domain_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

}

export default new TenantsService();