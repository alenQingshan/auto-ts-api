import { CulturalCategoryRead } from './CulturalCategoryRead.model';

export interface ListResponse_CulturalCategoryRead {
  /**
   * data
   */
  data: CulturalCategoryRead[] | null;
  /**
   * count
   */
  count: number | null;
}