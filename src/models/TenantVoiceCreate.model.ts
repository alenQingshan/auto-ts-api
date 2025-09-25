import { TenantVoiceStatus } from './TenantVoiceStatus.model';

export interface TenantVoiceCreate {
  /**
   * 租户 ID
   */
  tenant_id: number | null;
  /**
   * 音色 ID
   */
  voice_id: number | null;
  /**
   * 是否默认音色
   */
  is_default?: boolean | null;
  /**
   * 状态
   */
  status?: TenantVoiceStatus | null;
}