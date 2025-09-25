import { PermissionStatus } from './PermissionStatus.model';

export interface CorePermissionWithValid {
  /**
   * 权限编码
   */
  code: string | null;
  /**
   * 权限名称
   */
  name: string | null;
  /**
   * 描述
   */
  description?: any | null;
  /**
   * 父权限ID，顶层权限为空
   */
  parent_id?: any | null;
  /**
   * 权限状态
   */
  status?: PermissionStatus | null;
  /**
   * perm_id
   */
  perm_id: number | null;
  /**
   * children
   */
  children?: any | null;
  /**
   * is_valid
   */
  is_valid?: boolean | null;
}