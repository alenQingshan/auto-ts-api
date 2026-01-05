import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface VegRecipeCategoryStatusUpdate {
  /**
   * status
   */
  status: BaseStatus | null;
}