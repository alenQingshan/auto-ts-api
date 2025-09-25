import { UserStatus } from './UserStatus.model';

export interface UserStatusUpdate {
  /**
   * status
   */
  status: UserStatus | null;
}