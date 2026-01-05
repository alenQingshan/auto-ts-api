export interface NewsPushTaskArticleRead {
  /**
   * 新闻ID
   */
  article_id: number | null;
  /**
   * 排序
   */
  sort_order?: number | null;
  /**
   * 推送任务ID
   */
  task_id: number | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
}