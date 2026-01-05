export interface DataDictItemRead {
  /**
   * 唯一编码，如 user_type / admin
   */
  code: string | null;
  /**
   * 名称，如 用户类型 / 管理员
   */
  name: string | null;
  /**
   * 字典值（字符串类型）
   */
  value_str?: any | null;
  /**
   * 描述
   */
  description?: any | null;
  /**
   * 排序号
   */
  order_no?: number | null;
  /**
   * 每个item的id
   */
  dict_id: number | null;
  /**
   * parent_id
   */
  parent_id: any | null;
}