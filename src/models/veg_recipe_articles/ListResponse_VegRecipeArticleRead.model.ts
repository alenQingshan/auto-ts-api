import { VegRecipeArticleRead } from './VegRecipeArticleRead.model';

export interface ListResponse_VegRecipeArticleRead {
  /**
   * data
   */
  data: VegRecipeArticleRead[] | null;
  /**
   * count
   */
  count: number | null;
}