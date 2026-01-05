export interface EmailTenantChannelUpdate {
  /**
   * 配置名称
   */
  name?: any | null;
  /**
   * 是否为默认渠道
   */
  is_default?: any | null;
  /**
   * 默认发件人邮箱
   */
  from_email?: any | null;
  /**
   * 私有配置（API Key、区域、限流等）
   */
  metadata_json?: any | null;
}