import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface NewsHotRankStatusUpdate {
  /**
   * 启用禁用
   */
  status: BaseStatus | null;
}