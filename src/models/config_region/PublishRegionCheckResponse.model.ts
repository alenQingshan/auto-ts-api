import { PublishRegionOption } from '../common/PublishRegionOption.model';

export interface PublishRegionCheckResponse {
  /**
   * 是否匹配
   */
  matched: boolean | null;
  /**
   * 匹配的发行地区列表
   */
  matched_regions?: PublishRegionOption[] | null;
}