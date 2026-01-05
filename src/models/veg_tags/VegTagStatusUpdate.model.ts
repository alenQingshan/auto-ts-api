import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface VegTagStatusUpdate {
  /**
   * 标签状态：active-启用，inactive-禁用
   */
  status: BaseStatus | null;
}