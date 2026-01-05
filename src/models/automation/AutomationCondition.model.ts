export interface AutomationCondition {
  /**
   * 类名
   */
  class_name: string | null;
  /**
   * 选项
   */
  options?: any | null;
  /**
   * 条件ID
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