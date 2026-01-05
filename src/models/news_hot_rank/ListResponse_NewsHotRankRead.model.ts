import { NewsHotRankRead } from './NewsHotRankRead.model';

export interface ListResponse_NewsHotRankRead {
  /**
   * data
   */
  data: NewsHotRankRead[] | null;
  /**
   * count
   */
  count: number | null;
}