import { CorePermissionWithValid } from './CorePermissionWithValid.model';

export interface RolePermissionsRead {
  /**
   * 角色ID
   */
  role_id: number | null;
  /**
   * 权限树
   */
  permissions: CorePermissionWithValid[] | null;
}