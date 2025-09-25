import { PermissionStatus } from './PermissionStatus.model';

export interface PermissionStatusUpdate {
  /**
   * status
   */
  status: PermissionStatus | null;
}