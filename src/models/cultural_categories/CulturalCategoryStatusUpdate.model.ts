import { CulturalPublishStatus } from '../cultural_products/CulturalPublishStatus.model';

export interface CulturalCategoryStatusUpdate {
  /**
   * 发布状态
   */
  category_status: CulturalPublishStatus | null;
}