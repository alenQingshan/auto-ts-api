import { TenantStatus } from './TenantStatus.model';

export interface TenantStatusUpdate {
  /**
   * status
   */
  status: TenantStatus | null;
}