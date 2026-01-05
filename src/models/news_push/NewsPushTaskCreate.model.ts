export interface NewsPushTaskCreate {
  /**
   * 推送主题
   */
  title: string | null;
  /**
   * 计划推送时间
   */
  scheduled_at: string | null;
  /**
   * 新闻数据（JSON格式，前端上传的newsData）
   */
  news_data: any | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 创建人ID
   */
  created_by?: any | null;
}