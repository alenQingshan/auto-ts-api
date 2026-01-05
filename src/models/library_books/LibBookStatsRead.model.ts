export interface LibBookStatsRead {
  /**
   * book_id
   */
  book_id: number | null;
  /**
   * read_count
   */
  read_count: number | null;
  /**
   * like_count
   */
  like_count: number | null;
  /**
   * comment_count
   */
  comment_count: number | null;
  /**
   * updated_at
   */
  updated_at: string | null;
}