import { NewsPushLogRead } from '../news_articles/NewsPushLogRead.model';

export interface ListResponse_NewsPushLogRead {
  /**
   * data
   */
  data: NewsPushLogRead[] | null;
  /**
   * count
   */
  count: number | null;
}