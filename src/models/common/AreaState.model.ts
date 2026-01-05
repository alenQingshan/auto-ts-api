import { AreaCity } from './AreaCity.model';

export interface AreaState {
  /**
   * 省/州ID
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
   * 所属国家ID
   */
  parent_id: number | null;
  /**
   * 城市列表
   */
  cities?: AreaCity[] | null;
}