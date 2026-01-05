export interface NewsAuthorOption {
  /**
   * 作者ID
   */
  author_id: number | null;
  /**
   * 姓名（中文）
   */
  name_zh: string | null;
  /**
   * 英文姓名
   */
  name_en?: any | null;
  /**
   * 笔名
   */
  pen_name?: any | null;
  /**
   * 代号/客户码
   */
  code: string | null;
}