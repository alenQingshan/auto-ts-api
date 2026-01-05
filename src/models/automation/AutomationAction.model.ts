export interface AutomationAction {
  /**
   * 类名
   */
  class_name: string | null;
  /**
   * 选项
   */
  options?: any | null;
  /**
   * 绑定的条件ID，仅该条件满足时执行该动作
   */
  automation_condition_id?: any | null;
  /**
   * 动作ID
   */
  id?: any | null;
  /**
   * 自动化规则ID
   */
  automation_rule_id?: any | null;
  /**
   * 创建时间
   */
  created_at?: string | null;
  /**
   * 更新时间
   */
  updated_at?: string | null;
}