import { CulturalProductSpecInputType } from '../cultural_products/CulturalProductSpecInputType.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface CulturalSpecCreate {
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
   * 租户ID，NULL为全局规格
   */
  tenant_id?: any | null;
}