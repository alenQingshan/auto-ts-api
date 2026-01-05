export interface TaskTestSendRequest {
  /**
   * 目标邮箱地址
   */
  email: string | null;
  /**
   * 临时模板HTML，可选
   */
  template_html?: any | null;
}