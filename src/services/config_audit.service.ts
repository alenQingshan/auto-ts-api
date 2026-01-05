import { BaseService, ExtOptions } from './base.service';


class ConfigAuditService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Operation Logs
   * @param data any
   */
  listOperationLogs(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/audit/operation-logs`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Operation Log
   * @param log_id string | number
   * @param data any
   */
  getOperationLog(log_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/audit/operation-logs/${log_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new ConfigAuditService();