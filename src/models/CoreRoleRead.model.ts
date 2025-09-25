import { RoleStatus } from './RoleStatus.model';

export interface CoreRoleRead {
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
  /**
   * 角色ID
   */
  role_id: number | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 软删除标记
   */
  is_deleted: boolean | null;
}