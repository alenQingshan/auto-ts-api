import { MenuItem } from '../common/MenuItem.model';

export interface LoginResponse {
  /**
   * avatar
   */
  avatar?: any | null;
  /**
   * role
   */
  role: string | null;
  /**
   * token
   */
  token: string | null;
  /**
   * refresh_token
   */
  refresh_token: string | null;
  /**
   * username
   */
  username: string | null;
  /**
   * menus
   */
  menus?: MenuItem[] | null;
  /**
   * permissions
   */
  permissions?: string[] | null;
  /**
   * 用户ID
   */
  id: string | null;
  /**
   * 邮箱
   */
  email?: any | null;
  /**
   * 手机号
   */
  phone?: any | null;
  /**
   * 手机号国家代码（如 +86, +1）
   */
  phone_country_code?: any | null;
  /**
   * 昵称
   */
  display_name?: any | null;
  /**
   * 用户状态
   */
  status: string | null;
}