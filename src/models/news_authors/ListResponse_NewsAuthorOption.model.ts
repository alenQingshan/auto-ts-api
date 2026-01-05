import { NewsAuthorOption } from '../news_articles/NewsAuthorOption.model';

export interface ListResponse_NewsAuthorOption {
  /**
   * data
   */
  data: NewsAuthorOption[] | null;
  /**
   * count
   */
  count: number | null;
}