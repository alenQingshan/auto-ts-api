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
   * 手机号国家代码（如 +86, +1）
   */
  phone_country_code?: any | null;
  /**
   * password
   */
  password: string | null;
  /**
   * display_name
   */
  display_name?: any | null;
  /**
   * 租户ID（可选，为 None 时表示平台管理员身份，不关联任何租户）
   */
  tenant_id?: any | null;
  /**
   * 安全问题列表（可选，1-5个）
   */
  security_questions?: any | null;
}