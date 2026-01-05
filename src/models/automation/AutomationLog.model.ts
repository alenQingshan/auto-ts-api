export interface AutomationLog {
  /**
   * 是否成功
   */
  is_success: boolean | null;
  /**
   * 消息
   */
  message: string | null;
  /**
   * 参数
   */
  params?: any | null;
  /**
   * 异常
   */
  exception?: any | null;
  /**
   * 日志ID
   */
  id?: any | null;
  /**
   * 自动化规则ID
   */
  automation_rule_id?: any | null;
  /**
   * 规则动作ID
   */
  rule_action_id?: any | null;
  /**
   * 所属 组织/地点 ID
   */
  tenant_id?: any | null;
  /**
   * 创建时间
   */
  created_at?: string | null;
  /**
   * 更新时间
   */
  updated_at?: string | null;
}