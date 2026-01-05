import { SensitiveMatchType } from '../common/SensitiveMatchType.model';
import { SensitiveSeverity } from '../common/SensitiveSeverity.model';
import { SensitiveAction } from '../common/SensitiveAction.model';
import { SensitiveStatus } from '../common/SensitiveStatus.model';

export interface SensitiveWordCreate {
  /**
   * 租户ID；NULL表示全局规则
   */
  tenant_id?: any | null;
  /**
   * 语言/地区，如 zh-CN, en-US
   */
  lang?: string | null;
  /**
   * 行政区/市场，如 CN, US, HK，或更细分省市
   */
  region?: any | null;
  /**
   * 分类（可与数据字典联动，如 politics, porn, abuse 等）
   */
  category_code?: any | null;
  /**
   * 敏感词原文或正则表达式
   */
  word_text: string | null;
  /**
   * 规范化形式（去空格/同形/简繁等，便于去重）
   */
  word_normalized?: any | null;
  /**
   * 匹配方式
   */
  match_type?: SensitiveMatchType | null;
  /**
   * 严重级别
   */
  severity?: SensitiveSeverity | null;
  /**
   * 处置动作：mask=脱敏；block=拒绝；review=人工审核；notify=仅告警
   */
  action?: SensitiveAction | null;
  /**
   * mask时的替换文本
   */
  replacement?: any | null;
  /**
   * 状态
   */
  status?: SensitiveStatus | null;
  /**
   * 扩展参数，如 { "source":"ops", "reason":"..." }
   */
  metadata_json?: any | null;
}