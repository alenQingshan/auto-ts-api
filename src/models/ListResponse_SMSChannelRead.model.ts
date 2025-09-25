import { SMSChannelRead } from './SMSChannelRead.model';

export interface ListResponse_SMSChannelRead {
  /**
   * data
   */
  data: SMSChannelRead[] | null;
  /**
   * count
   */
  count: number | null;
}