import { LanguageCode } from '../library_books/LanguageCode.model';

export interface app__backend__schemas__library__lib_book_schema__LibBookContentRead {
  /**
   * book_content_id
   */
  book_content_id: number | null;
  /**
   * book_id
   */
  book_id: number | null;
  /**
   * chapter_no
   */
  chapter_no: number | null;
  /**
   * lang
   */
  lang?: any | null;
  /**
   * chapter_title
   */
  chapter_title?: any | null;
  /**
   * content_html
   */
  content_html?: any | null;
  /**
   * language_code
   */
  language_code: LanguageCode | null;
  /**
   * parent_id
   */
  parent_id?: any | null;
  /**
   * description
   */
  description?: any | null;
  /**
   * image_url
   */
  image_url?: any | null;
  /**
   * status
   */
  status: string | null;
  /**
   * content_status
   */
  content_status: string | null;
  /**
   * audited_at
   */
  audited_at?: any | null;
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
}