import { ConfStateNode } from './ConfStateNode.model';

export interface ConfCountryNode {
  /**
   * 国家ID（area_id）
   */
  area_id: number | null;
  /**
   * 国家代码
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
  states?: ConfStateNode[] | null;
}