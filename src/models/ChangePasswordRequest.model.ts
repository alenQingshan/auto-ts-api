export interface ChangePasswordRequest {
  /**
   * old_password
   */
  old_password: string | null;
  /**
   * new_password
   */
  new_password: string | null;
}