export interface Identity {
  /**
   * 角色编码 (core_roles.code)
   */
  role_type: string | null;
  /**
   * 角色名称 (core_roles.name)
   */
  role_name: string | null;
  /**
   * 租户ID，系统管理员身份时为None
   */
  tenant_id?: any | null;
  /**
   * 租户名称，系统管理员身份时为None
   */
  tenant_name?: any | null;
}