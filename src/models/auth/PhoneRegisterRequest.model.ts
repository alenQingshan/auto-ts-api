export interface PhoneRegisterRequest {
  /**
   * 手机号
   */
  phone: string | null;
  /**
   * 手机号国家代码（如 +86, +1）
   */
  phone_country_code?: any | null;
  /**
   * 验证码
   */
  verification_code: string | null;
  /**
   * 密码（可选，用于后续密码登录）
   */
  password?: any | null;
  /**
   * 昵称
   */
  display_name?: any | null;
  /**
   * 安全问题列表（可选，1-5个）
   */
  security_questions?: any | null;
}