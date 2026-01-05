export interface PublishRegionAreaRead {
  /**
   * 明细ID
   */
  area_item_id: number | null;
  /**
   * 发行地区ID
   */
  region_id: number | null;
  /**
   * 地区ID
   */
  area_id: number | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 是否勾选，勾选生效
   */
  is_valid?: boolean | null;
  /**
   * 国家名称
   */
  country_name?: any | null;
  /**
   * 省/州名称
   */
  state_name?: any | null;
  /**
   * 城市名称
   */
  city_name?: any | null;
  /**
   * 地区代码（冗余字段）
   */
  area_code?: any | null;
  /**
   * 地区名称（冗余字段）
   */
  area_name?: any | null;
}