export interface NewsPushTaskUpdate {
  /**
   * 推送主题
   */
  title?: any | null;
  /**
   * 计划推送时间
   */
  scheduled_at?: any | null;
  /**
   * 新闻数据（JSON格式，前端上传的newsData）
   */
  news_data?: any | null;
  /**
   * 更新人
   */
  updated_by?: any | null;
}