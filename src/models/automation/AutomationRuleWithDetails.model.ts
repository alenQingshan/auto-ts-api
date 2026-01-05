import { AutomationRuleStatus } from './AutomationRuleStatus.model';
import { AutomationCondition } from './AutomationCondition.model';
import { AutomationAction } from './AutomationAction.model';
import { AutomationLog } from './AutomationLog.model';

export interface AutomationRuleWithDetails {
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
  /**
   * 规则ID
   */
  id?: any | null;
  /**
   * 组织/地点 ID
   */
  tenant_id?: any | null;
  /**
   * 组织/地点名称
   */
  tenant_name?: any | null;
  /**
   * 创建时间
   */
  created_at?: string | null;
  /**
   * 更新时间
   */
  updated_at?: string | null;
  /**
   * 条件列表
   */
  conditions?: AutomationCondition[] | null;
  /**
   * 动作列表
   */
  actions?: AutomationAction[] | null;
  /**
   * 日志列表
   */
  logs?: AutomationLog[] | null;
}