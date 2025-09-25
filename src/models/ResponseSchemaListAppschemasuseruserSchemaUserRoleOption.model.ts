import { UserRoleOption } from './UserRoleOption.model';

export interface ResponseSchemaListAppschemasuseruserSchemaUserRoleOption {
  /**
   * data
   */
  data?: UserRoleOption[] | null;
  /**
   * status
   */
  status?: number | null;
  /**
   * message
   */
  message?: string | null;
}