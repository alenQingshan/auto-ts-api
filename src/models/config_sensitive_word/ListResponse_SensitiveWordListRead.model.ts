import { SensitiveWordListRead } from './SensitiveWordListRead.model';

export interface ListResponse_SensitiveWordListRead {
  /**
   * data
   */
  data: SensitiveWordListRead[] | null;
  /**
   * count
   */
  count: number | null;
}