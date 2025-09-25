export interface UserInfoResponse {
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
   * avatar
   */
  avatar?: any | null;
  /**
   * role
   */
  role: string | null;
  /**
   * status
   */
  status: string | null;
}