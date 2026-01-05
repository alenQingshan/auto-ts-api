import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface CulturalTagStatusUpdate {
  /**
   * 状态
   */
  status: BaseStatus | null;
}