import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface SecurityQuestionCreate {
  /**
   * 问题内容
   */
  question_text: string | null;
  /**
   * 租户ID
   */
  tenant_id?: any | null;
  /**
   * 状态: active/inactive
   */
  status?: BaseStatus | null;
  /**
   * 语言/地区
   */
  lang?: string | null;
}