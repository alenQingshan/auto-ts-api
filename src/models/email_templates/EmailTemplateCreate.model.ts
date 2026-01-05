import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface EmailTemplateCreate {
  /**
   * 唯一模板代码，例如 order_alert
   */
  code: string | null;
  /**
   * 模板名称，例如 Order alert email to admin
   */
  title: string | null;
  /**
   * 模板描述
   */
  description?: any | null;
  /**
   * 邮件标题模版，可带变量
   */
  subject: string | null;
  /**
   * HTML富文本内容
   */
  body_html: string | null;
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
  lang?: string | null;
  /**
   * 启用状态
   */
  status?: BaseStatus | null;
}