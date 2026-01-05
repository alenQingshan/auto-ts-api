import { SensitiveStatus } from '../common/SensitiveStatus.model';

export interface SensitiveWordStatusUpdate {
  /**
   * 敏感词状态
   */
  status: SensitiveStatus | null;
}