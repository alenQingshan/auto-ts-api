import { SensitiveMatchType } from '../common/SensitiveMatchType.model';
import { SensitiveSeverity } from '../common/SensitiveSeverity.model';
import { SensitiveAction } from '../common/SensitiveAction.model';
import { SensitiveStatus } from '../common/SensitiveStatus.model';

export interface SensitiveWordListRead {
  /**
   * 规则ID
   */
  word_id: number | null;
  /**
   * 租户ID
   */
  tenant_id?: any | null;
  /**
   * 租户名称
   */
  tenant_name?: any | null;
  /**
   * 语言/地区
   */
  lang: string | null;
  /**
   * 敏感词原文或正则表达式
   */
  word_text: string | null;
  /**
   * 匹配方式
   */
  match_type: SensitiveMatchType | null;
  /**
   * 严重级别
   */
  severity: SensitiveSeverity | null;
  /**
   * 处置动作
   */
  action: SensitiveAction | null;
  /**
   * 状态
   */
  status: SensitiveStatus | null;
  /**
   * 创建时间
   */
  created_at: string | null;
}