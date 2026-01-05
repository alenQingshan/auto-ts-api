import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface AIChatQuickPromptStatusUpdate {
  /**
   * 状态：启用/禁用状态
   */
  status: BaseStatus | null;
}