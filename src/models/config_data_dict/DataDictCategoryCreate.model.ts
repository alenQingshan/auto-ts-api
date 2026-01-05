export interface DataDictCategoryCreate {
  /**
   * 唯一编码，如 user_type / admin
   */
  code: string | null;
  /**
   * 名称，如 用户类型 / 管理员
   */
  name: string | null;
  /**
   * 描述
   */
  description?: any | null;
  /**
   * 排序号
   */
  order_no?: number | null;
}