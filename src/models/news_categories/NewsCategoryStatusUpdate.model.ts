import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface NewsCategoryStatusUpdate {
  /**
   * status
   */
  status: BaseStatus | null;
}