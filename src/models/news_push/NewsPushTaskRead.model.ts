import { NewsPushTaskStatus } from './NewsPushTaskStatus.model';

export interface NewsPushTaskRead {
  /**
   * 推送主题
   */
  title: string | null;
  /**
   * 计划推送时间
   */
  scheduled_at?: any | null;
  /**
   * 新闻数据（JSON格式，前端上传的newsData）
   */
  news_data?: any | null;
  /**
   * 推送任务ID
   */
  task_id: number | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 实际完成时间
   */
  sent_at?: any | null;
  /**
   * 任务状态
   */
  push_status: NewsPushTaskStatus | null;
  /**
   * 本次推送的新闻数量
   */
  news_count: number | null;
  /**
   * 推送HTML内容
   */
  push_html?: any | null;
  /**
   * 预览/模板渲染后的HTML快照
   */
  preview_html?: any | null;
  /**
   * 创建人ID
   */
  created_by?: any | null;
  /**
   * 创建人username
   */
  created_by_un?: any | null;
  /**
   * 更新人
   */
  updated_by?: any | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 新闻ID列表
   */
  article_ids?: any | null;
}