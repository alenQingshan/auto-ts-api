export interface FileInfo {
  /**
   * id
   */
  id?: number | null;
  /**
   * filename
   */
  filename?: string | null;
  /**
   * original_filename
   */
  original_filename?: string | null;
  /**
   * file_url
   */
  file_url?: string | null;
  /**
   * 文件大小（字节）
   */
  file_size?: number | null;
  /**
   * mime_type
   */
  mime_type?: string | null;
  /**
   * category
   */
  category?: string | null;
  /**
   * uploaded_at
   */
  uploaded_at?: string | null;
}