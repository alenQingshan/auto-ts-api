export interface UserBehaviorEvent {
  /**
   * type
   */
  type: string | null;
  /**
   * tenant_id
   */
  tenant_id?: any | null;
  /**
   * anonymousId
   */
  anonymousId?: any | null;
  /**
   * userDomain
   */
  userDomain?: any | null;
  /**
   * userId
   */
  userId?: any | null;
  /**
   * pagePath
   */
  pagePath: any | null;
  /**
   * pageTitle
   */
  pageTitle: any | null;
  /**
   * fromPage
   */
  fromPage: any | null;
  /**
   * navigateType
   */
  navigateType: any | null;
  /**
   * params
   */
  params: any | null;
  /**
   * enterTime
   */
  enterTime: any | null;
  /**
   * leaveTime
   */
  leaveTime: any | null;
  /**
   * duration
   */
  duration: any | null;
  /**
   * deviceInfo
   */
  deviceInfo: any | null;
  /**
   * inferredBehaviors
   */
  inferredBehaviors: any | null;
  /**
   * timestamp
   */
  timestamp: number | null;
}