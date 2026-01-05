import { CulturalCategoryOption } from '../cultural_products/CulturalCategoryOption.model';

export interface ListResponse_CulturalCategoryOption {
  /**
   * data
   */
  data: CulturalCategoryOption[] | null;
  /**
   * count
   */
  count: number | null;
}