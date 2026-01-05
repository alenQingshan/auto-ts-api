import { NewsAuthorRead } from './NewsAuthorRead.model';

export interface ListResponse_NewsAuthorRead {
  /**
   * data
   */
  data: NewsAuthorRead[] | null;
  /**
   * count
   */
  count: number | null;
}