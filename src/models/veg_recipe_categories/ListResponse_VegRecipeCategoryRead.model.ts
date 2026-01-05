import { VegRecipeCategoryRead } from './VegRecipeCategoryRead.model';

export interface ListResponse_VegRecipeCategoryRead {
  /**
   * data
   */
  data: VegRecipeCategoryRead[] | null;
  /**
   * count
   */
  count: number | null;
}