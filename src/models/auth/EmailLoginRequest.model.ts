export interface EmailLoginRequest {
  /**
   * 邮箱地址
   */
  email: string | null;
  /**
   * 密码（可选，如果不提供则使用验证码登录）
   */
  password?: any | null;
  /**
   * 验证码（如果使用验证码登录）
   */
  verification_code?: any | null;
}