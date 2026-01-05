import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface app__backend__schemas__security__question_schema__SecurityQuestionRead {
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
  /**
   * 问题ID
   */
  question_id: number | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 软删除标记
   */
  is_deleted: boolean | null;
  /**
   * 是否激活（计算字段：根据 status 和 is_deleted 计算）
   */
  is_active: boolean | null;
}