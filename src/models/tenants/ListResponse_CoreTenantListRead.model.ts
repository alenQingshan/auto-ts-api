import { CoreTenantListRead } from '../users/CoreTenantListRead.model';

export interface ListResponse_CoreTenantListRead {
  /**
   * data
   */
  data: CoreTenantListRead[] | null;
  /**
   * count
   */
  count: number | null;
}