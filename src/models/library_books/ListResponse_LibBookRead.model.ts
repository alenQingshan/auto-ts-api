import { LibBookRead } from './LibBookRead.model';

export interface ListResponse_LibBookRead {
  /**
   * data
   */
  data: LibBookRead[] | null;
  /**
   * count
   */
  count: number | null;
}