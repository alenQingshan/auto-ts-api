import { TTSVoiceStatus } from './TTSVoiceStatus.model';

export interface TTSVoiceStatusUpdate {
  /**
   * status
   */
  status: TTSVoiceStatus | null;
}