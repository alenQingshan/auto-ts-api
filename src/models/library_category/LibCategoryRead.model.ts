import { LanguageCode } from '../library_books/LanguageCode.model';

export interface LibCategoryRead {
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
   * 状态: active/inactive
   */
  status?: any | null;
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
   * 分类ID
   */
  category_id: number | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 当前语言代码
   */
  lang?: any | null;
  /**
   * 默认语言代码
   */
  language_code: LanguageCode | null;
  /**
   * 审核通过时间
   */
  audited_at?: any | null;
  /**
   * 发布时间
   */
  published_at?: any | null;
  /**
   * created_at
   */
  created_at: string | null;
  /**
   * updated_at
   */
  updated_at: string | null;
  /**
   * is_deleted
   */
  is_deleted: boolean | null;
  /**
   * 分类内资源数量
   */
  resource_count?: number | null;
  /**
   * children
   */
  children?: any | null;
}