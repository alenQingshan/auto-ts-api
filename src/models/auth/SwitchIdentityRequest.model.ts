export interface SwitchIdentityRequest {
  /**
   * 要切换到的租户ID，为None时切换回系统管理员身份
   */
  tenant_id?: any | null;
}