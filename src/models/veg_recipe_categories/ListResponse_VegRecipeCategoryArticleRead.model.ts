import { VegRecipeCategoryArticleRead } from '../veg_articles/VegRecipeCategoryArticleRead.model';

export interface ListResponse_VegRecipeCategoryArticleRead {
  /**
   * data
   */
  data: VegRecipeCategoryArticleRead[] | null;
  /**
   * count
   */
  count: number | null;
}