import { BaseService, ExtOptions } from './base.service';
import { CoreRoleCreate } from '../models/roles/CoreRoleCreate.model';
import { CoreRoleUpdate } from '../models/roles/CoreRoleUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { RoleStatusUpdate } from '../models/roles/RoleStatusUpdate.model';
import { RolePermissionsSave } from '../models/roles/RolePermissionsSave.model';

class RolesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get All Roles
   * @param data any
   */
  getAllRoles(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/roles`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Role
   * @param data CoreRoleCreate
   */
  createRole(data: CoreRoleCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/roles`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Role By Id
   * @param role_id string | number
   * @param data any
   */
  getRoleById(role_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/roles/${role_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Role
   * @param role_id string | number
   * @param data CoreRoleUpdate
   */
  updateRole(role_id: string | number, data: CoreRoleUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/roles/${role_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Role
   * @param role_id string | number
   * @param data any
   */
  deleteRole(role_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/core/roles/${role_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Role Status
   * @param role_id string | number
   * @param data RoleStatusUpdate
   */
  updateRoleStatus(role_id: string | number, data: RoleStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/roles/${role_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Save Role Permissions
   * @param role_id string | number
   * @param data RolePermissionsSave
   */
  saveRolePermissions(role_id: string | number, data: RolePermissionsSave, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/core/roles/${role_id}/permissions`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

  /**
   * Get Role Permissions Tree
   * @param role_id string | number
   * @param data any
   */
  getRolePermissionsTree(role_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/roles/${role_id}/permissions`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Roles Options
   * @param data any
   */
  getRolesOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/role/options`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new RolesService();