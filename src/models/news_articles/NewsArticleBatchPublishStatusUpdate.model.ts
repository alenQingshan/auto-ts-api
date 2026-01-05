import { NewsArticleStatus } from './NewsArticleStatus.model';

export interface NewsArticleBatchPublishStatusUpdate {
  /**
   * 书籍id列表
   */
  article_ids: number[] | null;
  /**
   * 发布状态
   */
  status: NewsArticleStatus | null;
}