import { NewsArticleStatus } from '../news_articles/NewsArticleStatus.model';

export interface VegArticleBatchPublishStatusUpdate {
  /**
   * 书籍id列表
   */
  article_ids: number[] | null;
  /**
   * 发布状态
   */
  status: NewsArticleStatus | null;
}