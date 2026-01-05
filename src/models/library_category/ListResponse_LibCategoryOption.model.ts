import { LibCategoryOption } from '../library_books/LibCategoryOption.model';

export interface ListResponse_LibCategoryOption {
  /**
   * data
   */
  data: LibCategoryOption[] | null;
  /**
   * count
   */
  count: number | null;
}