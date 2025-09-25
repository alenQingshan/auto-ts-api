import { Identity } from './Identity.model';

export interface SwitchableIdentitiesResponse {
  /**
   * 当前用户ID
   */
  user_id: number | null;
  /**
   * 当前用户的身份信息
   */
  current_identity: Identity | null;
  /**
   * 可切换的身份列表
   */
  identities: Identity[] | null;
}