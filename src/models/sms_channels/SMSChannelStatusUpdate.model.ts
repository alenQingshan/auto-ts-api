import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface SMSChannelStatusUpdate {
  /**
   * 状态（active/inactive）
   */
  status: BaseStatus | null;
}