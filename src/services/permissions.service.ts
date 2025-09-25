import { BaseService, ExtOptions } from './base.service';
import { CorePermissionCreate } from '../models/CorePermissionCreate.model';
import { CorePermissionUpdate } from '../models/CorePermissionUpdate.model';
import { ResponseSchema } from '../models/ResponseSchema.model';
import { PermissionStatusUpdate } from '../models/PermissionStatusUpdate.model';

class PermissionsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get All Permissions
   * @param data any
   */
  getAllPermissions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/permissions`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Permission
   * @param data CorePermissionCreate
   */
  createPermission(data: CorePermissionCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/permissions`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Permission By Id
   * @param perm_id string | number
   * @param data any
   */
  getPermissionById(perm_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/permissions/${perm_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Permission
   * @param perm_id string | number
   * @param data CorePermissionUpdate
   */
  updatePermission(perm_id: string | number, data: CorePermissionUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/permissions/${perm_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Permission
   * @param perm_id string | number
   * @param data any
   */
  deletePermission(perm_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/permissions/${perm_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Permission Status
   * @param perm_id string | number
   * @param data PermissionStatusUpdate
   */
  updatePermissionStatus(perm_id: string | number, data: PermissionStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/permissions/${perm_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new PermissionsService();