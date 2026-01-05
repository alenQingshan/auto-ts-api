import { VegTagOption } from '../veg_articles/VegTagOption.model';

export interface ListResponse_VegTagOption {
  /**
   * data
   */
  data: VegTagOption[] | null;
  /**
   * count
   */
  count: number | null;
}