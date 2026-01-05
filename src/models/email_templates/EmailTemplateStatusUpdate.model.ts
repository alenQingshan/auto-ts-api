import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface EmailTemplateStatusUpdate {
  /**
   * 新状态
   */
  status: BaseStatus | null;
}