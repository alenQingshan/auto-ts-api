export interface EmailTemplateUpdate {
  /**
   * 唯一模板代码，例如 order_alert
   */
  code?: any | null;
  /**
   * 模板名称
   */
  title?: any | null;
  /**
   * 模板描述
   */
  description?: any | null;
  /**
   * 邮件标题模版
   */
  subject?: any | null;
  /**
   * HTML富文本内容
   */
  body_html?: any | null;
  /**
   * 纯文本内容
   */
  body_text?: any | null;
  /**
   * 所属租户
   */
  tenant_id?: any | null;
  /**
   * 语言/地区
   */
  lang?: any | null;
  /**
   * 启用状态
   */
  status?: any | null;
}