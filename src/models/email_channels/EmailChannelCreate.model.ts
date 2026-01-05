import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface EmailChannelCreate {
  /**
   * 渠道编码（aliyun, aws_ses, sendgrid 等）
   */
  provider_code: string | null;
  /**
   * 渠道名称
   */
  name: string | null;
  /**
   * 默认发件人邮箱
   */
  from_email?: any | null;
  /**
   * 状态
   */
  status?: BaseStatus | null;
  /**
   * 额外配置（API Key、区域、限流等）
   */
  metadata_json?: any | null;
}