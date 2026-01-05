import { NewsCategoryArticleRead } from '../news_articles/NewsCategoryArticleRead.model';

export interface ListResponse_NewsCategoryArticleRead {
  /**
   * data
   */
  data: NewsCategoryArticleRead[] | null;
  /**
   * count
   */
  count: number | null;
}