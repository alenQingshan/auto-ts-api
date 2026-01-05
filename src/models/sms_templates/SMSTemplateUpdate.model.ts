export interface SMSTemplateUpdate {
  /**
   * 唯一模板代码
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
   * 短信内容
   */
  content?: any | null;
  /**
   * 所属租户
   */
  tenant_id?: any | null;
  /**
   * 厂商代码
   */
  provider_code?: any | null;
  /**
   * 厂商侧模板ID
   */
  provider_template_id?: any | null;
  /**
   * 语言/地区
   */
  lang?: any | null;
  /**
   * 状态：启用/禁用
   */
  status?: any | null;
}