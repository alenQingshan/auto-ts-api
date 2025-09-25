export interface CoreUserUpdate {
  /**
   * 租户ID
   */
  tenant_id?: any | null;
  /**
   * 用户名
   */
  username?: any | null;
  /**
   * 邮箱
   */
  email?: any | null;
  /**
   * 手机号
   */
  phone?: any | null;
  /**
   * 昵称
   */
  display_name?: any | null;
  /**
   * 头像资源ID
   */
  avatar_asset_id?: any | null;
  /**
   * 默认语言
   */
  default_locale?: any | null;
  /**
   * 默认时区
   */
  default_tz?: any | null;
  /**
   * 状态
   */
  status?: any | null;
  /**
   * 角色ID
   */
  role_id?: any | null;
}