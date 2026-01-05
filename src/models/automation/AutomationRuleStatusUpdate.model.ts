import { AutomationRuleStatus } from './AutomationRuleStatus.model';

export interface AutomationRuleStatusUpdate {
  /**
   * 状态（active/inactive）
   */
  status: AutomationRuleStatus | null;
}