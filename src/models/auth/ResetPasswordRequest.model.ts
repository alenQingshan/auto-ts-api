export interface ResetPasswordRequest {
  /**
   * account
   */
  account: string | null;
  /**
   * code
   */
  code: string | null;
  /**
   * new_password
   */
  new_password: string | null;
}