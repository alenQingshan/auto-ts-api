import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface PublishRegionStatusUpdate {
  /**
   * 发行地区状态
   */
  status: BaseStatus | null;
}