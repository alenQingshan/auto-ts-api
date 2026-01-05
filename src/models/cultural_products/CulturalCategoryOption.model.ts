export interface CulturalCategoryOption {
  /**
   * 分类ID
   */
  category_id: number | null;
  /**
   * 分类名称
   */
  name: any | null;
  /**
   * 语言代码
   */
  lang?: any | null;
  /**
   * 父分类ID
   */
  parent_id?: any | null;
  /**
   * 子分类列表
   */
  children?: any | null;
}