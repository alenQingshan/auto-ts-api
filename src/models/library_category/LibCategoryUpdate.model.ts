import { LanguageCode } from '../library_books/LanguageCode.model';

export interface LibCategoryUpdate {
  /**
   * lang
   */
  lang: LanguageCode | null;
  /**
   * code
   */
  code?: any | null;
  /**
   * name
   */
  name?: any | null;
  /**
   * description
   */
  description?: any | null;
  /**
   * parent_id
   */
  parent_id?: any | null;
  /**
   * category_status
   */
  category_status?: any | null;
  /**
   * status
   */
  status?: any | null;
  /**
   * sort_order
   */
  sort_order?: any | null;
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
}