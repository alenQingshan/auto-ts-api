import { LibCategoryRead } from './LibCategoryRead.model';

export interface ListResponse_LibCategoryRead {
  /**
   * data
   */
  data: LibCategoryRead[] | null;
  /**
   * count
   */
  count: number | null;
}