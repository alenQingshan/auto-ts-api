import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface LibBookContentStatusUpdate {
  /**
   * 章节状态: active/inactive
   */
  status: BaseStatus | null;
}