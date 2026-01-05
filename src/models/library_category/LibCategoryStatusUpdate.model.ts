import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface LibCategoryStatusUpdate {
  /**
   * status
   */
  status: BaseStatus | null;
}