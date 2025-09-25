import { RoleStatus } from './RoleStatus.model';

export interface CoreRoleCreate {
  /**
   * 角色编码
   */
  code: string | null;
  /**
   * 角色名称
   */
  name: string | null;
  /**
   * 角色描述
   */
  description?: any | null;
  /**
   * 角色状态
   */
  status?: RoleStatus | null;
  /**
   * 租户ID
   */
  tenant_id?: any | null;
  /**
   * 是否系统角色
   */
  is_system?: boolean | null;
}