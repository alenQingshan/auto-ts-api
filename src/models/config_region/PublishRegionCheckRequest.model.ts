export interface PublishRegionCheckRequest {
  /**
   * 国家ID
   */
  country_id: number | null;
  /**
   * 省/州ID
   */
  state_id?: any | null;
  /**
   * 城市ID
   */
  city_id?: any | null;
  /**
   * 发行地区ID（可选，如果提供则只检查该地区）
   */
  region_id?: any | null;
}