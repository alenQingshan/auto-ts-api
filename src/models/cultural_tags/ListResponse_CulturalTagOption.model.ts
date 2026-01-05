import { CulturalTagOption } from '../cultural_products/CulturalTagOption.model';

export interface ListResponse_CulturalTagOption {
  /**
   * data
   */
  data: CulturalTagOption[] | null;
  /**
   * count
   */
  count: number | null;
}