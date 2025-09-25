import { SMSChannelStatus } from './SMSChannelStatus.model';

export interface SMSChannelStatusUpdate {
  /**
   * 状态（active/inactive）
   */
  status: SMSChannelStatus | null;
}