export interface UserProfile {
  /**
   * 显示名称/昵称
   */
  display_name?: any | null;
  /**
   * 性别（male/female/other/unknown）
   */
  gender?: any | null;
  /**
   * 出生日期（YYYY-MM-DD）
   */
  birthdate?: any | null;
  /**
   * 年龄段（如 '18-24', '25-34'）
   */
  age_band?: any | null;
  /**
   * 国家码（ISO-3166-1 alpha-2）
   */
  country_code?: any | null;
  /**
   * 省份/州
   */
  region?: any | null;
  /**
   * 城市
   */
  city?: any | null;
  /**
   * 多语言偏好数组
   */
  languages_json?: any | null;
  /**
   * 头像URL
   */
  avatar_url?: any | null;
  /**
   * 默认语言代码
   */
  default_locale?: any | null;
  /**
   * 默认时区
   */
  default_tz?: any | null;
}