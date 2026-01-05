import { UserInfoItem } from '../common/UserInfoItem.model';

export interface UserInfoListResponse {
  /**
   * 用户数量
   */
  count: number | null;
  /**
   * 用户信息数组
   */
  items: UserInfoItem[] | null;
}