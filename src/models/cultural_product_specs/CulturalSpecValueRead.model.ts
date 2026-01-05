import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface CulturalSpecValueRead {
  /**
   * 规格值内容，如 黑、白、41、42
   */
  value: string | null;
  /**
   * 规格值维度展示图片（可选，例如颜色维度的示意图）
   */
  image_url?: any | null;
  /**
   * 同一规格下排序，越小越靠前
   */
  sort_order?: number | null;
  /**
   * 状态：active=启用，inactive=停用
   */
  status?: BaseStatus | null;
  /**
   * 规格值ID
   */
  spec_value_id: number | null;
  /**
   * 规格ID
   */
  spec_id: number | null;
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