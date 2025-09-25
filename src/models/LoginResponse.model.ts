import { MenuItem } from './MenuItem.model';

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
}