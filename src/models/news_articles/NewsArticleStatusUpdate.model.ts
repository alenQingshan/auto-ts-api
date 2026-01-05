import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface NewsArticleStatusUpdate {
  /**
   * status
   */
  status: BaseStatus | null;
}