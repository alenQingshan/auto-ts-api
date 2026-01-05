import { LanguageCode } from '../library_books/LanguageCode.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface VegTagRead {
  /**
   * 默认语言代码
   */
  language_code: LanguageCode | null;
  /**
   * 标签名称
   */
  name: string | null;
  /**
   * 标签描述
   */
  description?: any | null;
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
   * 基础状态
   */
  status: BaseStatus | null;
  /**
   * 标签ID
   */
  tag_id: number | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 当前语言代码
   */
  lang?: any | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 是否删除
   */
  is_deleted: boolean | null;
  /**
   * 关联文章数量
   */
  article_count?: any | null;
}