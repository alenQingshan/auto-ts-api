import { NewsCategoryOption } from '../news_articles/NewsCategoryOption.model';

export interface ListResponse_NewsCategoryOption {
  /**
   * data
   */
  data: NewsCategoryOption[] | null;
  /**
   * count
   */
  count: number | null;
}