export interface ResetPasswordRequest {
  /**
   * reset_code
   */
  reset_code: string | null;
  /**
   * new_password
   */
  new_password: string | null;
}