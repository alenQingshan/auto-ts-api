import { BaseStatus } from './BaseStatus.model';

export interface SMSTemplateCreate {
  /**
   * 唯一模板代码，如 system::sms.register_otp
   */
  code: string | null;
  /**
   * 模板名称（后台显示用，如：注册验证码短信）
   */
  title: string | null;
  /**
   * 短信内容，支持变量占位符（如：您的验证码是 {{code}}）
   */
  content: string | null;
  /**
   * 所属租户，NULL 表示全局模板
   */
  tenant_id?: any | null;
  /**
   * 厂商代码（如 aliyun、tencent、twilio）
   */
  provider_code?: any | null;
  /**
   * 厂商侧模板ID（如阿里云的TemplateCode）
   */
  provider_template_id?: any | null;
  /**
   * 模板描述
   */
  description?: any | null;
  /**
   * 语言/地区，如 zh-CN、en-US
   */
  lang?: string | null;
  /**
   * 状态：启用/禁用
   */
  status?: BaseStatus | null;
}