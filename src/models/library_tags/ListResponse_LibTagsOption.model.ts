import { LibTagsOption } from '../library_books/LibTagsOption.model';

export interface ListResponse_LibTagsOption {
  /**
   * data
   */
  data: LibTagsOption[] | null;
  /**
   * count
   */
  count: number | null;
}