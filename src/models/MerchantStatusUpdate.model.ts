import { MerchantStatus } from './MerchantStatus.model';

export interface MerchantStatusUpdate {
  /**
   * status
   */
  status: MerchantStatus | null;
}