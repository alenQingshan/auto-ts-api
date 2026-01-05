import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface NewsBreakingRead {
  /**
   * 快讯记录ID
   */
  breaking_item_id: number | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 新闻ID
   */
  article_id: number | null;
  /**
   * 状态：active=生效中, inactive=已下架
   */
  breaking_status: BaseStatus | null;
  /**
   * 快讯开始时间
   */
  start_at: string | null;
  /**
   * 排序值（越小越靠前）
   */
  sort_order: number | null;
  /**
   * 取消时间
   */
  canceled_at?: any | null;
  /**
   * 操作人ID
   */
  created_by?: any | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 新闻文章信息
   */
  article?: any | null;
}