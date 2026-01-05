import { LanguageCode } from '../library_books/LanguageCode.model';
import { CulturalPublishStatus } from '../cultural_products/CulturalPublishStatus.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface CulturalCategoryRead {
  /**
   * 分类名称
   */
  name: string | null;
  /**
   * 分类唯一编码（英文短码）
   */
  code: string | null;
  /**
   * 分类描述
   */
  description?: any | null;
  /**
   * 父分类ID
   */
  parent_id?: any | null;
  /**
   * 默认语言代码
   */
  language_code: LanguageCode | null;
  /**
   * 类别图标路径/URL
   */
  icon?: any | null;
  /**
   * 分类图片/封面
   */
  image_url?: any | null;
  /**
   * 排序
   */
  sort_order?: number | null;
  /**
   * APP显示
   */
  show_in_app?: boolean | null;
  /**
   * Web显示
   */
  show_in_web?: boolean | null;
  /**
   * 发布状态
   */
  category_status?: CulturalPublishStatus | null;
  /**
   * 当前语言代码
   */
  lang?: any | null;
  /**
   * 分类ID
   */
  category_id: number | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 分类内资源数量
   */
  resource_count?: number | null;
  /**
   * 审核通过时间
   */
  audited_at?: any | null;
  /**
   * 发布时间
   */
  published_at?: any | null;
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
   * 状态
   */
  status: BaseStatus | null;
  /**
   * 商品数量
   */
  product_count?: any | null;
  /**
   * 子分类列表
   */
  children?: any | null;
}