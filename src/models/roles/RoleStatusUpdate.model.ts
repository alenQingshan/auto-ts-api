import { RoleStatus } from '../common/RoleStatus.model';

export interface RoleStatusUpdate {
  /**
   * status
   */
  status: RoleStatus | null;
}