export interface EmailRegisterRequest {
  /**
   * 邮箱地址
   */
  email: string | null;
  /**
   * 密码（可选，如果不提供则使用验证码注册）
   */
  password?: any | null;
  /**
   * 验证码（如果使用验证码注册）
   */
  verification_code?: any | null;
  /**
   * 昵称
   */
  display_name?: any | null;
  /**
   * 安全问题列表（可选，1-5个）
   */
  security_questions?: any | null;
}