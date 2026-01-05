import { PublishRegionListRead } from '../common/PublishRegionListRead.model';

export interface ListResponse_PublishRegionListRead {
  /**
   * data
   */
  data: PublishRegionListRead[] | null;
  /**
   * count
   */
  count: number | null;
}