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
   * 手机号国家代码（如 +86, +1）
   */
  phone_country_code?: any | null;
  /**
   * display_name
   */
  display_name?: any | null;
  /**
   * 租户ID
   */
  tenant_id?: any | null;
  /**
   * message
   */
  message: string | null;
}