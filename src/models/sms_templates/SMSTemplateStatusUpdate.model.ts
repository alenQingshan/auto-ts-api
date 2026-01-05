import { BaseStatus } from './BaseStatus.model';

export interface SMSTemplateStatusUpdate {
  /**
   * 新状态
   */
  status: BaseStatus | null;
}