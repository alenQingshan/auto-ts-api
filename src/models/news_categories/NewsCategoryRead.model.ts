import { BaseStatus } from '../sms_templates/BaseStatus.model';
import { LanguageCode } from '../library_books/LanguageCode.model';

export interface NewsCategoryRead {
  /**
   * 类目编码
   */
  code?: any | null;
  /**
   * 分类名称
   */
  name: any | null;
  /**
   * 分类描述
   */
  description?: any | null;
  /**
   * 父分类ID
   */
  parent_id?: any | null;
  /**
   * 基础状态
   */
  status: BaseStatus | null;
  /**
   * 默认语言代码
   */
  language_code: LanguageCode | null;
  /**
   * 状态: active/inactive/pending
   */
  category_status?: any | null;
  /**
   * 排序序号
   */
  sort_order?: any | null;
  /**
   * 类别图标路径/URL
   */
  icon?: any | null;
  /**
   * 分类图片/封面
   */
  image_url?: any | null;
  /**
   * APP显示
   */
  show_in_app?: any | null;
  /**
   * Web显示
   */
  show_in_web?: any | null;
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
   * 是否删除
   */
  is_deleted: boolean | null;
  /**
   * 父分类名称
   */
  parent_name?: any | null;
  /**
   * 文章数量
   */
  article_count?: any | null;
  /**
   * 子分类数量
   */
  subcategory_count?: any | null;
  /**
   * 子分类列表
   */
  children?: any | null;
}