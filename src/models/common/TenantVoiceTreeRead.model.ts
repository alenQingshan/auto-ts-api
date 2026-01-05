export interface TenantVoiceTreeRead {
  /**
   * 租户 ID
   */
  tenant_id: number | null;
  /**
   * 租户名称
   */
  tenant_name: string | null;
  /**
   * 已选音色/可选音色
   */
  voices?: any | null;
}