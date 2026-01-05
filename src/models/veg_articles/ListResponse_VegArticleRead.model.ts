import { VegArticleRead } from './VegArticleRead.model';

export interface ListResponse_VegArticleRead {
  /**
   * data
   */
  data: VegArticleRead[] | null;
  /**
   * count
   */
  count: number | null;
}