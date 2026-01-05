import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface VegCategoryStatusUpdate {
  /**
   * status
   */
  status: BaseStatus | null;
}