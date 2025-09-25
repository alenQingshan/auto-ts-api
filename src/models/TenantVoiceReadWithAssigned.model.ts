import { TenantVoiceStatus } from './TenantVoiceStatus.model';

export interface TenantVoiceReadWithAssigned {
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
  /**
   * 租户音色分配 ID
   */
  tenant_voice_id: any | null;
  /**
   * 音色名称
   */
  voice_name?: any | null;
  /**
   * 音色语言/地区
   */
  voice_lang?: any | null;
  /**
   * 音色头像
   */
  voice_icon_url?: any | null;
  /**
   * 音色示例音频
   */
  sample_audio_url?: any | null;
  /**
   * is_assigned
   */
  is_assigned?: boolean | null;
}