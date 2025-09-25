export interface RegisterRequest {
  /**
   * username
   */
  username: string | null;
  /**
   * email
   */
  email: string | null;
  /**
   * phone
   */
  phone: string | null;
  /**
   * password
   */
  password: string | null;
  /**
   * display_name
   */
  display_name?: any | null;
}