export interface ConfCityNodeWithValid {
  /**
   * 城市ID（area_id）
   */
  area_id: number | null;
  /**
   * 城市代码
   */
  area_code: string | null;
  /**
   * 城市中文名
   */
  name_zh: string | null;
  /**
   * 城市英文名
   */
  name_en?: any | null;
  /**
   * 省/州ID（parent_id）
   */
  parent_id: number | null;
  /**
   * 是否勾选，勾选生效
   */
  is_valid?: boolean | null;
}