import { CoreOperationLogRead } from '../users/CoreOperationLogRead.model';

export interface ListResponse_CoreOperationLogRead {
  /**
   * data
   */
  data: CoreOperationLogRead[] | null;
  /**
   * count
   */
  count: number | null;
}