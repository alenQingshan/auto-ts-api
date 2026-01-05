export interface LibTagBookBindResponse {
  /**
   * 操作结果消息
   */
  message: string | null;
  /**
   * 绑定的数量
   */
  binded_count?: any | null;
  /**
   * 解绑的数量
   */
  unbinded_count?: any | null;
  /**
   * 请求操作的总数
   */
  total_requested: number | null;
}