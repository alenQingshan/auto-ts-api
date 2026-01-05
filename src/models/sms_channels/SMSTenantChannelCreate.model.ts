export interface SMSTenantChannelCreate {
  /**
   * 配置名称
   */
  name: string | null;
  /**
   * 是否为默认渠道
   */
  is_default?: boolean | null;
  /**
   * 私有配置（API Key、区域、限流等）
   */
  metadata_json?: any | null;
  /**
   * 租户 ID
   */
  tenant_id: number | null;
  /**
   * 短信渠道 ID
   */
  channel_id: number | null;
}