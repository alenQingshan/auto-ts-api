import { LanguageCode } from '../library_books/LanguageCode.model';
import { LibBookContentStatus } from '../library_books/LibBookContentStatus.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface app__backend__schemas__library__lib_book_content_schema__LibBookContentRead {
  /**
   * 章节序号
   */
  chapter_no: number | null;
  /**
   * 章节标题
   */
  chapter_title?: any | null;
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
   * 章节ID
   */
  book_content_id: number | null;
  /**
   * 书籍ID
   */
  book_id: number | null;
  /**
   * 当前语言代码
   */
  lang?: any | null;
  /**
   * 章节审核时间
   */
  audited_at?: any | null;
  /**
   * 状态: active/inactive
   */
  status?: BaseStatus | null;
  /**
   * created_at
   */
  created_at: string | null;
  /**
   * updated_at
   */
  updated_at: string | null;
  /**
   * is_deleted
   */
  is_deleted: boolean | null;
  /**
   * children
   */
  children?: any | null;
}