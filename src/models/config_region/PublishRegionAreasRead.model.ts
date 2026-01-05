import { ConfCountryNodeWithValid } from './ConfCountryNodeWithValid.model';

export interface PublishRegionAreasRead {
  /**
   * 发行地区ID
   */
  region_id: number | null;
  /**
   * 地区树
   */
  areas: ConfCountryNodeWithValid[] | null;
}