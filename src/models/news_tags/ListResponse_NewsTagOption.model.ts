import { NewsTagOption } from '../news_articles/NewsTagOption.model';

export interface ListResponse_NewsTagOption {
  /**
   * data
   */
  data: NewsTagOption[] | null;
  /**
   * count
   */
  count: number | null;
}