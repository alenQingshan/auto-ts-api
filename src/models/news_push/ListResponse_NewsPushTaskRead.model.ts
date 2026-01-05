import { NewsPushTaskRead } from './NewsPushTaskRead.model';

export interface ListResponse_NewsPushTaskRead {
  /**
   * data
   */
  data: NewsPushTaskRead[] | null;
  /**
   * count
   */
  count: number | null;
}