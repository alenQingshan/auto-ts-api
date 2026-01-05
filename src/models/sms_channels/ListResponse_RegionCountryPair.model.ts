import { RegionCountryPair } from '../common/RegionCountryPair.model';

export interface ListResponse_RegionCountryPair {
  /**
   * data
   */
  data: RegionCountryPair[] | null;
  /**
   * count
   */
  count: number | null;
}