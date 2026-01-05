import { AreaCountry } from '../common/AreaCountry.model';

export interface AreaVariableListResponse {
  /**
   * 国家总数
   */
  count: number | null;
  /**
   * 国家列表
   */
  items: AreaCountry[] | null;
}