import { NewsPublishStatus } from '../news_articles/NewsPublishStatus.model';

export interface VegCategoryBatchStatusUpdate {
  /**
   * 分类ID列表
   */
  category_ids: number[] | null;
  /**
   * 状态
   */
  status: NewsPublishStatus | null;
}