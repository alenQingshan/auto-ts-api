export interface RegisterResponse {
  /**
   * id
   */
  id: string | null;
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
   * display_name
   */
  display_name?: any | null;
  /**
   * message
   */
  message: string | null;
}