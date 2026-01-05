export interface SecurityQuestionUpdate {
  /**
   * 问题内容
   */
  question_text?: any | null;
  /**
   * 租户ID
   */
  tenant_id?: any | null;
  /**
   * 状态: active/inactive
   */
  status?: any | null;
  /**
   * 语言/地区
   */
  lang?: any | null;
}