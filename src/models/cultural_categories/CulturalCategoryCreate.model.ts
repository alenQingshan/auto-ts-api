import { LanguageCode } from '../library_books/LanguageCode.model';
import { CulturalPublishStatus } from '../cultural_products/CulturalPublishStatus.model';

export interface CulturalCategoryCreate {
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
   * 语言
   */
  language_code?: LanguageCode | null;
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
   * 租户ID（可选，将从当前用户获取）
   */
  tenant_id?: any | null;
  /**
   * 创建的语言代码（用于多语言，多语言处理由 DAL 层自动完成）
   */
  lang?: any | null;
}