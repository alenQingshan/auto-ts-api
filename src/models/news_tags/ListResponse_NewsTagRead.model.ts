import { NewsTagRead } from './NewsTagRead.model';

export interface ListResponse_NewsTagRead {
  /**
   * data
   */
  data: NewsTagRead[] | null;
  /**
   * count
   */
  count: number | null;
}