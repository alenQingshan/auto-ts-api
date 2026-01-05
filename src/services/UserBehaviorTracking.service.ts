import { BaseService, ExtOptions } from './base.service';
import { UserBehaviorBatchSchema } from '../models/UserBehaviorTracking/UserBehaviorBatchSchema.model';

class UserBehaviorTrackingService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Track User Behavior
   * @param data UserBehaviorBatchSchema
   */
  trackUserBehavior(data: UserBehaviorBatchSchema, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/user/user_behavior_tracking/batch`;
    return this.request<any>('post', url, data, extOptions);
  }

}

export default new UserBehaviorTrackingService();