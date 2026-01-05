import { NewsArticleRead } from './NewsArticleRead.model';

export interface ListResponse_NewsArticleRead {
  /**
   * data
   */
  data: NewsArticleRead[] | null;
  /**
   * count
   */
  count: number | null;
}