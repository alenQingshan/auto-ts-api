import { LanguageCode } from '../library_books/LanguageCode.model';

export interface VegRecipeCategoryUpdate {
  /**
   * 更新的语言
   */
  lang: LanguageCode | null;
  /**
   * 分类名称
   */
  name?: any | null;
  /**
   * 分类描述
   */
  description?: any | null;
  /**
   * 发布状态
   */
  category_status?: any | null;
  /**
   * 排序
   */
  sort_order?: any | null;
  /**
   * code
   */
  code?: any | null;
  /**
   * parent_id
   */
  parent_id?: any | null;
  /**
   * status
   */
  status?: any | null;
  /**
   * icon
   */
  icon?: any | null;
  /**
   * image_url
   */
  image_url?: any | null;
  /**
   * show_in_app
   */
  show_in_app?: any | null;
  /**
   * show_in_web
   */
  show_in_web?: any | null;
  /**
   * 发行地区范围
   */
  publish_region?: any | null;
}