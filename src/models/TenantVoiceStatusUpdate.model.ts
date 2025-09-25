import { TenantVoiceStatus } from './TenantVoiceStatus.model';

export interface TenantVoiceStatusUpdate {
  /**
   * status
   */
  status: TenantVoiceStatus | null;
}