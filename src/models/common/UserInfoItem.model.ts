import { UserProfile } from './UserProfile.model';

export interface UserInfoItem {
  /**
   * 用户ID
   */
  user_id: number | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * profile
   */
  profile: UserProfile | null;
  /**
   * 更新时间（ISO 8601）
   */
  updated_at: string | null;
}