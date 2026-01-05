import { VegCategoryArticleRead } from '../veg_articles/VegCategoryArticleRead.model';

export interface ListResponse_VegCategoryArticleRead {
  /**
   * data
   */
  data: VegCategoryArticleRead[] | null;
  /**
   * count
   */
  count: number | null;
}