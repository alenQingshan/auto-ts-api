import { CulturalProductSkuCreate } from './CulturalProductSkuCreate.model';

export interface CulturalProductSkusUpdate {
  /**
   * SKU列表
   */
  skus: CulturalProductSkuCreate[] | null;
}