import { LanguageCode } from '../library_books/LanguageCode.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface CulturalTagRead {
  /**
   * 标签名
   */
  name: string | null;
  /**
   * 摘要
   */
  description?: any | null;
  /**
   * 语言
   */
  language_code?: LanguageCode | null;
  /**
   * 图标
   */
  icon?: any | null;
  /**
   * 展示颜色
   */
  color?: any | null;
  /**
   * 排序
   */
  sort_order?: number | null;
  /**
   * 标签ID
   */
  tag_id: number | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 状态
   */
  status: BaseStatus | null;
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
  /**
   * 商品数量
   */
  product_count?: any | null;
  /**
   * 多语言翻译列表
   */
  translations?: any | null;
}