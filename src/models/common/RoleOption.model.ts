export interface RoleOption {
  /**
   * 角色ID
   */
  role_id: number | null;
  /**
   * 角色编码
   */
  code: string | null;
  /**
   * 角色名称
   */
  name: string | null;
  /**
   * 租户ID
   */
  tenant_id?: any | null;
}