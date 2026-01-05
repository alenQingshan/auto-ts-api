import { BaseService, ExtOptions } from './base.service';
import { SMSChannelCreate } from '../models/sms_channels/SMSChannelCreate.model';
import { SMSChannelUpdate } from '../models/sms_channels/SMSChannelUpdate.model';
import { SMSChannelStatusUpdate } from '../models/sms_channels/SMSChannelStatusUpdate.model';
import { SMSTenantChannelCreate } from '../models/sms_channels/SMSTenantChannelCreate.model';
import { SMSTenantChannelUpdate } from '../models/sms_channels/SMSTenantChannelUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';

class SmsChannelsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Supported Sms Providers
   * @param data any
   */
  getSupportedSmsProviders(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/providers`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Sms Configurations
   * @param data any
   */
  getSmsConfigurations(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/configurations`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Sms Channels
   * @param data any
   */
  getSmsChannels(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/channels`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Sms Channel
   * @param data SMSChannelCreate
   */
  createSmsChannel(data: SMSChannelCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/channels`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Sms Channel By Id
   * @param channel_id string | number
   * @param data any
   */
  getSmsChannelById(channel_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/channels/${channel_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Sms Channel
   * @param channel_id string | number
   * @param data SMSChannelUpdate
   */
  updateSmsChannel(channel_id: string | number, data: SMSChannelUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/channels/${channel_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Sms Channel
   * @param channel_id string | number
   * @param data any
   */
  deleteSmsChannel(channel_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/channels/${channel_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Sms Channel Status
   * @param channel_id string | number
   * @param data SMSChannelStatusUpdate
   */
  updateSmsChannelStatus(channel_id: string | number, data: SMSChannelStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/channels/${channel_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * List Tenant Sms Channels
   * @param data any
   */
  listTenantSmsChannels(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/tenant-channels`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Tenant Sms Channel
   * @param data SMSTenantChannelCreate
   */
  createTenantSmsChannel(data: SMSTenantChannelCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/tenant-channels`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Tenant Sms Channel Regions
   * @param data any
   */
  getTenantSmsChannelRegions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/tenant-channels/regions`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Tenant Sms Channel By Id
   * @param tenant_channel_id string | number
   * @param data any
   */
  getTenantSmsChannelById(tenant_channel_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/tenant-channels/${tenant_channel_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Tenant Sms Channel
   * @param tenant_channel_id string | number
   * @param data SMSTenantChannelUpdate
   */
  updateTenantSmsChannel(tenant_channel_id: string | number, data: SMSTenantChannelUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/tenant-channels/${tenant_channel_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Tenant Sms Channel
   * @param tenant_channel_id string | number
   * @param data any
   */
  deleteTenantSmsChannel(tenant_channel_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/sms/tenant-channels/${tenant_channel_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Get Tenant Sms Channel Regions Public
   * @param data any
   */
  getTenantSmsChannelRegionsPublic(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/tenant-channels/regions/public`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new SmsChannelsService();