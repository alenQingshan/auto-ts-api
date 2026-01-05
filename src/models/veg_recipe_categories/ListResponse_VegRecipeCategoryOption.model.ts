import { VegRecipeCategoryOption } from '../veg_articles/VegRecipeCategoryOption.model';

export interface ListResponse_VegRecipeCategoryOption {
  /**
   * data
   */
  data: VegRecipeCategoryOption[] | null;
  /**
   * count
   */
  count: number | null;
}