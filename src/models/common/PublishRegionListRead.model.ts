import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface PublishRegionListRead {
  /**
   * 发行地区ID
   */
  region_id: number | null;
  /**
   * 租户ID
   */
  tenant_id?: any | null;
  /**
   * 租户名称
   */
  tenant_name?: any | null;
  /**
   * 发行地区唯一编码
   */
  region_code: string | null;
  /**
   * 发行地区名称
   */
  name: string | null;
  /**
   * 描述
   */
  description?: any | null;
  /**
   * 状态
   */
  status: BaseStatus | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 明细数量
   */
  areas_count?: any | null;
}