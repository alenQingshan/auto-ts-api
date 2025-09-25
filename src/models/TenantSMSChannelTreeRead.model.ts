import { SMSChannelRead } from './SMSChannelRead.model';

export interface TenantSMSChannelTreeRead {
  /**
   * 租户 ID
   */
  tenant_id: number | null;
  /**
   * 租户名称
   */
  tenant_name: string | null;
  /**
   * 分配的短信渠道列表
   */
  channels?: SMSChannelRead[] | null;
}