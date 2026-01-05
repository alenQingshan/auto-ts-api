import { CoreUserRead } from './CoreUserRead.model';

export interface ListResponse_CoreUserRead {
  /**
   * data
   */
  data: CoreUserRead[] | null;
  /**
   * count
   */
  count: number | null;
}