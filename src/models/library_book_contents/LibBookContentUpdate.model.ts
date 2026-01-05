import { LanguageCode } from '../library_books/LanguageCode.model';

export interface LibBookContentUpdate {
  /**
   * lang
   */
  lang: LanguageCode | null;
  /**
   * 章节序号
   */
  chapter_no?: any | null;
  /**
   * 章节标题
   */
  chapter_title?: any | null;
  /**
   * HTML 富文本内容
   */
  content_html?: any | null;
  /**
   * 父章节ID
   */
  parent_id?: any | null;
  /**
   * 章节描述
   */
  description?: any | null;
  /**
   * 章节图片/插图 URL
   */
  image_url?: any | null;
  /**
   * 发布状态
   */
  content_status?: any | null;
}