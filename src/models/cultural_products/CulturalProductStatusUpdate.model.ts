import { CulturalProductStatus } from './CulturalProductStatus.model';

export interface CulturalProductStatusUpdate {
  /**
   * 商品发布状态
   */
  product_status: CulturalProductStatus | null;
}