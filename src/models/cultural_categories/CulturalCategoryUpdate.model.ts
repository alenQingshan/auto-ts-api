export interface CulturalCategoryUpdate {
  /**
   * 更新的语言代码（用于多语言，多语言处理由 DAL 层自动完成）
   */
  lang?: any | null;
  /**
   * 分类名称
   */
  name?: any | null;
  /**
   * 分类唯一编码
   */
  code?: any | null;
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
  language_code?: any | null;
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
  sort_order?: any | null;
  /**
   * APP显示
   */
  show_in_app?: any | null;
  /**
   * Web显示
   */
  show_in_web?: any | null;
  /**
   * 发布状态
   */
  category_status?: any | null;
}