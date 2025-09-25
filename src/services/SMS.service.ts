import { BaseService, ExtOptions } from './base.service';
import { SMSChannelCreate } from '../models/SMSChannelCreate.model';
import { SMSChannelUpdate } from '../models/SMSChannelUpdate.model';
import { SMSChannelStatusUpdate } from '../models/SMSChannelStatusUpdate.model';
import { TenantSMSChannelAssignAction } from '../models/TenantSMSChannelAssignAction.model';
import { ResponseSchema } from '../models/ResponseSchema.model';

class SMSService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Sms Channels
   * @param data any
   */
  getSmsChannels(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/channels`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Sms Channel
   * @param data SMSChannelCreate
   */
  createSmsChannel(data: SMSChannelCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/channels`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Sms Channel By Id
   * @param channel_id string | number
   * @param data any
   */
  getSmsChannelById(channel_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/channels/${channel_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Sms Channel
   * @param channel_id string | number
   * @param data SMSChannelUpdate
   */
  updateSmsChannel(channel_id: string | number, data: SMSChannelUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/channels/${channel_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Sms Channel
   * @param channel_id string | number
   * @param data any
   */
  deleteSmsChannel(channel_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/channels/${channel_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Sms Channel Status
   * @param channel_id string | number
   * @param data SMSChannelStatusUpdate
   */
  updateSmsChannelStatus(channel_id: string | number, data: SMSChannelStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/channels/${channel_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Get Tenant Sms Channels
   * @param data any
   */
  getTenantSmsChannels(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/tenant-channels`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Manage Tenant Sms Channel Assignment
   * @param tenant_id string | number
   * @param channel_id string | number
   * @param data TenantSMSChannelAssignAction
   */
  manageTenantSmsChannelAssignment(tenant_id: string | number, channel_id: string | number, data: TenantSMSChannelAssignAction, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/api/v1/tenant/${tenant_id}/channels/${channel_id}`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Get Tenant Default Channel
   * @param tenant_id string | number
   * @param data any
   */
  getTenantDefaultChannel(tenant_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/tenant/${tenant_id}/default-channel`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new SMSService();