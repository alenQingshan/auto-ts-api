import { CulturalProductSpecCreate } from './CulturalProductSpecCreate.model';

export interface CulturalProductSpecsUpdate {
  /**
   * 规格列表
   */
  specs: CulturalProductSpecCreate[] | null;
}