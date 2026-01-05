import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface TenantStatusUpdate {
  /**
   * status
   */
  status: BaseStatus | null;
}