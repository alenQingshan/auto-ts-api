export interface SendVerificationCodeRequest {
  /**
   * 账号（邮箱或手机号）
   */
  account: string | null;
  /**
   * 验证码类型：register/login/reset_password
   */
  code_type?: string | null;
  /**
   * 手机号国家代码（如 +86, +1），仅当 account 为手机号时需要
   */
  country_code?: any | null;
}