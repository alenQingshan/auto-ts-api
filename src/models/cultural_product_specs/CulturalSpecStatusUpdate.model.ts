import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface CulturalSpecStatusUpdate {
  /**
   * 状态：active=启用，inactive=停用
   */
  status: BaseStatus | null;
}