import { AreaState } from './AreaState.model';

export interface AreaCountry {
  /**
   * 国家ID
   */
  area_id: number | null;
  /**
   * 国家代码（ISO 3166-1 alpha-2）
   */
  area_code: string | null;
  /**
   * 国家中文名
   */
  name_zh: string | null;
  /**
   * 国家英文名
   */
  name_en?: any | null;
  /**
   * 省/州列表
   */
  states?: AreaState[] | null;
}