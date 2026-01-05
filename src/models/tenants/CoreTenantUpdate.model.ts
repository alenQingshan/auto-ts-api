export interface CoreTenantUpdate {
  /**
   * 租户名称
   */
  name?: any | null;
  /**
   * 唯一编码
   */
  code?: any | null;
  /**
   * 类型
   */
  type?: any | null;
  /**
   * 状态
   */
  status?: any | null;
  /**
   * 图标URL
   */
  logo_url?: any | null;
  /**
   * 联系人
   */
  contact_name?: any | null;
  /**
   * 联系电话
   */
  contact_phone?: any | null;
  /**
   * 联系人邮箱
   */
  contact_email?: any | null;
  /**
   * 简介
   */
  description?: any | null;
  /**
   * 详细地址
   */
  address?: any | null;
  /**
   * 纬度
   */
  latitude?: any | null;
  /**
   * 经度
   */
  longitude?: any | null;
  /**
   * 国家/地区
   */
  region?: any | null;
  /**
   * 扩展 JSON
   */
  metadata_json?: any | null;
}