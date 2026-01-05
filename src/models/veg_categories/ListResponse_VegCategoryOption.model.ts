import { VegCategoryOption } from '../veg_articles/VegCategoryOption.model';

export interface ListResponse_VegCategoryOption {
  /**
   * data
   */
  data: VegCategoryOption[] | null;
  /**
   * count
   */
  count: number | null;
}