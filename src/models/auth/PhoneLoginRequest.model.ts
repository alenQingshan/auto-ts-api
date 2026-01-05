export interface PhoneLoginRequest {
  /**
   * 手机号
   */
  phone: string | null;
  /**
   * 手机号国家代码（如 +86, +1）
   */
  phone_country_code?: any | null;
  /**
   * 密码（可选，如果不提供则使用验证码登录）
   */
  password?: any | null;
  /**
   * 验证码（如果使用验证码登录）
   */
  verification_code?: any | null;
}