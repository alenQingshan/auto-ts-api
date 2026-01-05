import { PermissionStatus } from '../common/PermissionStatus.model';

export interface PermissionStatusUpdate {
  /**
   * status
   */
  status: PermissionStatus | null;
}