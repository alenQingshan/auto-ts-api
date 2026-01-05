import { UserStatus } from '../common/UserStatus.model';

export interface UserStatusUpdate {
  /**
   * status
   */
  status: UserStatus | null;
}