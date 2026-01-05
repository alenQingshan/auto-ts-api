import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface EmailChannelStatusUpdate {
  /**
   * 状态（active/inactive）
   */
  status: BaseStatus | null;
}