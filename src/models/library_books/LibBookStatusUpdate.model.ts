import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface LibBookStatusUpdate {
  /**
   * status
   */
  status: BaseStatus | null;
}