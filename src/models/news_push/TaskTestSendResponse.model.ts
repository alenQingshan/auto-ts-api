export interface TaskTestSendResponse {
  /**
   * 操作结果消息
   */
  message: string | null;
  /**
   * 目标邮箱地址
   */
  email: string | null;
  /**
   * 消息ID
   */
  message_id: string | null;
}