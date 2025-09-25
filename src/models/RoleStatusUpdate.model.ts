import { RoleStatus } from './RoleStatus.model';

export interface RoleStatusUpdate {
  /**
   * status
   */
  status: RoleStatus | null;
}