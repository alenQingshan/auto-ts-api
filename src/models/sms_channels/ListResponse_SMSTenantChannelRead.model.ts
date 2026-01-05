import { SMSTenantChannelRead } from './SMSTenantChannelRead.model';

export interface ListResponse_SMSTenantChannelRead {
  /**
   * data
   */
  data: SMSTenantChannelRead[] | null;
  /**
   * count
   */
  count: number | null;
}