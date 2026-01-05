import { LanguageCode } from '../library_books/LanguageCode.model';

export interface LibTagUpdate {
  /**
   * lang
   */
  lang: LanguageCode | null;
  /**
   * 标签名称
   */
  name?: any | null;
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
  sort_order?: any | null;
  /**
   * 状态
   */
  status?: any | null;
  /**
   * 发行地区范围
   */
  publish_region?: any | null;
}