import { AutomationRuleStatus } from './AutomationRuleStatus.model';

export interface AutomationRuleUpdate {
  /**
   * 规则名称
   */
  name: string | null;
  /**
   * 规则代码
   */
  code: string | null;
  /**
   * 规则描述
   */
  description: string | null;
  /**
   * 事件类名
   */
  event_class?: any | null;
  /**
   * 配置数据
   */
  config_data?: any | null;
  /**
   * 是否自定义
   */
  is_custom?: boolean | null;
  /**
   * 状态
   */
  status?: AutomationRuleStatus | null;
}