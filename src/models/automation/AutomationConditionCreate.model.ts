export interface AutomationConditionCreate {
  /**
   * 类名
   */
  class_name: string | null;
  /**
   * 选项
   */
  options?: any | null;
  /**
   * 自动化规则ID
   */
  automation_rule_id: number | null;
}