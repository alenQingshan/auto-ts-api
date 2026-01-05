import { LanguageCode } from '../library_books/LanguageCode.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface NewsTagCreate {
  /**
   * 语言代码
   */
  language_code?: LanguageCode | null;
  /**
   * 标签名称
   */
  name: string | null;
  /**
   * 标签描述
   */
  description?: any | null;
  /**
   * 图标
   */
  icon?: any | null;
  /**
   * 展示颜色
   */
  color?: any | null;
  /**
   * 排序
   */
  sort_order?: number | null;
  /**
   * 状态
   */
  status?: BaseStatus | null;
  /**
   * 默认语言代码
   */
  lang?: LanguageCode | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
}