import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface CulturalSpecValueCreate {
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
}