import { LanguageCode } from '../library_books/LanguageCode.model';

export interface CulturalTagCreate {
  /**
   * 标签名
   */
  name: string | null;
  /**
   * 摘要
   */
  description?: any | null;
  /**
   * 语言
   */
  language_code?: LanguageCode | null;
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
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 多语言翻译列表
   */
  translations?: any | null;
}