export interface ResetPasswordBySecurityQuestionsRequest {
  /**
   * 用户账号（邮箱或手机号）
   */
  account: string | null;
  /**
   * 安全问题答案列表（按问题顺序）
   */
  answers: string[] | null;
  /**
   * 新密码
   */
  new_password: string | null;
}