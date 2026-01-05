import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface SecurityQuestionStatusUpdate {
  /**
   * status
   */
  status: BaseStatus | null;
}