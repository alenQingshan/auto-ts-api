import { CulturalProductRead } from './CulturalProductRead.model';

export interface ListResponse_CulturalProductRead {
  /**
   * data
   */
  data: CulturalProductRead[] | null;
  /**
   * count
   */
  count: number | null;
}