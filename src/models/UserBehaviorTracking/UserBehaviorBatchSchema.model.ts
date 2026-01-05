import { UserBehaviorEvent } from '../common/UserBehaviorEvent.model';

export interface UserBehaviorBatchSchema {
  /**
   * events
   */
  events: UserBehaviorEvent[] | null;
}