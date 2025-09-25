import { CoreTenantRead } from './CoreTenantRead.model';

export interface ResponseSchemaListAppschemastenanttenantSchemaCoreTenantRead {
  /**
   * data
   */
  data?: CoreTenantRead[] | null;
  /**
   * status
   */
  status?: number | null;
  /**
   * message
   */
  message?: string | null;
}