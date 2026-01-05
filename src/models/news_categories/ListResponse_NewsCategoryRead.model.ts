import { NewsCategoryRead } from './NewsCategoryRead.model';

export interface ListResponse_NewsCategoryRead {
  /**
   * data
   */
  data: NewsCategoryRead[] | null;
  /**
   * count
   */
  count: number | null;
}