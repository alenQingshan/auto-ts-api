export interface EmailTenantChannelRead {
  /**
   * 配置名称
   */
  name: string | null;
  /**
   * 是否为默认渠道
   */
  is_default?: boolean | null;
  /**
   * 默认发件人邮箱
   */
  from_email?: any | null;
  /**
   * 私有配置（API Key、区域、限流等）
   */
  metadata_json?: any | null;
  /**
   * 租户-邮件渠道配置ID
   */
  tenant_channel_id: number | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 邮件渠道ID
   */
  channel_id: number | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
}