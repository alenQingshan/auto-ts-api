import { SMSChannelStatus } from './SMSChannelStatus.model';

export interface SMSChannelCreate {
  /**
   * 渠道编码（aliyun, tencent, twilio等）
   */
  provider_code: string | null;
  /**
   * 渠道名称
   */
  name: string | null;
  /**
   * API网关地址
   */
  endpoint?: any | null;
  /**
   * 适用区域
   */
  region?: any | null;
  /**
   * 短信签名（部分厂商必填）
   */
  sign_name?: any | null;
  /**
   * 状态
   */
  status?: SMSChannelStatus | null;
  /**
   * 额外配置，如限流、厂商特定参数
   */
  metadata_json?: any | null;
}