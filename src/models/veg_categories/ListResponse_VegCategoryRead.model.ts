import { VegCategoryRead } from './VegCategoryRead.model';

export interface ListResponse_VegCategoryRead {
  /**
   * data
   */
  data: VegCategoryRead[] | null;
  /**
   * count
   */
  count: number | null;
}