import { CulturalPublishStatus } from '../cultural_products/CulturalPublishStatus.model';

export interface CulturalCategoryBatchStatusUpdate {
  /**
   * 分类ID列表
   */
  category_ids: number[] | null;
  /**
   * 目标状态
   */
  target_status: CulturalPublishStatus | null;
}