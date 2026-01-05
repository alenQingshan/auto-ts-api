import { CulturalProductStatus } from './CulturalProductStatus.model';

export interface CulturalProductBatchStatusUpdate {
  /**
   * 商品ID列表
   */
  product_ids: number[] | null;
  /**
   * 目标状态
   */
  target_status: CulturalProductStatus | null;
}