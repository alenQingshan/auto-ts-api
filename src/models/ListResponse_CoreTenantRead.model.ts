import { CoreTenantRead } from './CoreTenantRead.model';

export interface ListResponse_CoreTenantRead {
  /**
   * data
   */
  data: CoreTenantRead[] | null;
  /**
   * count
   */
  count: number | null;
}