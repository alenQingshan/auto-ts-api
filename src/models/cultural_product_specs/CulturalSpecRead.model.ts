import { CulturalProductSpecInputType } from '../cultural_products/CulturalProductSpecInputType.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface CulturalSpecRead {
  /**
   * 规格名称，如 颜色、尺码
   */
  name: string | null;
  /**
   * 规格描述
   */
  description?: any | null;
  /**
   * 选择类型：single=单选，multiple=多选，dropdown=下拉
   */
  input_type?: CulturalProductSpecInputType | null;
  /**
   * 状态：active=启用，inactive=停用
   */
  status?: BaseStatus | null;
  /**
   * 规格ID
   */
  spec_id: number | null;
  /**
   * 租户ID
   */
  tenant_id?: any | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 软删除标志
   */
  is_deleted: boolean | null;
}