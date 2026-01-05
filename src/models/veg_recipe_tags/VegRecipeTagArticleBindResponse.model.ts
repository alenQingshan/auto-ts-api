export interface VegRecipeTagArticleBindResponse {
  /**
   * 成功数量
   */
  success_count: number | null;
  /**
   * 失败数量
   */
  failed_count: number | null;
  /**
   * 失败项详情
   */
  failed_items?: any | null;
}