import { LanguageCode } from '../library_books/LanguageCode.model';
import { LibBookContentStatus } from '../library_books/LibBookContentStatus.model';

export interface LibBookContentCreate {
  /**
   * 章节序号
   */
  chapter_no: number | null;
  /**
   * 章节标题
   */
  chapter_title: string | null;
  /**
   * HTML 富文本内容
   */
  content_html?: any | null;
  /**
   * 语言代码
   */
  language_code?: LanguageCode | null;
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
  content_status?: LibBookContentStatus | null;
  /**
   * 书籍ID
   */
  book_id: number | null;
  /**
   * 默认语言代码
   */
  lang?: LanguageCode | null;
}