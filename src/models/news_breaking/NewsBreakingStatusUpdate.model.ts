import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface NewsBreakingStatusUpdate {
  /**
   * 快讯状态：active-生效中，inactive-已下架
   */
  breaking_status: BaseStatus | null;
}