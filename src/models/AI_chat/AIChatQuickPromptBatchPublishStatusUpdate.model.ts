import { AIChatQuickPromptStatus } from './AIChatQuickPromptStatus.model';

export interface AIChatQuickPromptBatchPublishStatusUpdate {
  /**
   * 快捷提问ID列表
   */
  prompt_ids: number[] | null;
  /**
   * 状态
   */
  prompt_status: AIChatQuickPromptStatus | null;
}