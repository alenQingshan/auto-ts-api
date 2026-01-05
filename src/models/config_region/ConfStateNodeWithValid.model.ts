import { ConfCityNodeWithValid } from './ConfCityNodeWithValid.model';

export interface ConfStateNodeWithValid {
  /**
   * 省/州ID（area_id）
   */
  area_id: number | null;
  /**
   * 省/州代码
   */
  area_code: string | null;
  /**
   * 省/州中文名
   */
  name_zh: string | null;
  /**
   * 省/州英文名
   */
  name_en?: any | null;
  /**
   * 国家ID（parent_id）
   */
  parent_id: number | null;
  /**
   * 是否勾选，勾选生效
   */
  is_valid?: boolean | null;
  /**
   * 城市列表
   */
  cities?: ConfCityNodeWithValid[] | null;
}