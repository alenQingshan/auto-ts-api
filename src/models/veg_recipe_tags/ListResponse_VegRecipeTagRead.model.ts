import { VegRecipeTagRead } from './VegRecipeTagRead.model';

export interface ListResponse_VegRecipeTagRead {
  /**
   * data
   */
  data: VegRecipeTagRead[] | null;
  /**
   * count
   */
  count: number | null;
}