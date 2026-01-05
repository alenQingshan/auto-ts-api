import { BaseService, ExtOptions } from './base.service';
import { EmailChannelCreate } from '../models/email_channels/EmailChannelCreate.model';
import { EmailChannelUpdate } from '../models/email_channels/EmailChannelUpdate.model';
import { EmailChannelStatusUpdate } from '../models/email_channels/EmailChannelStatusUpdate.model';
import { EmailTenantChannelCreate } from '../models/email_channels/EmailTenantChannelCreate.model';
import { EmailTenantChannelUpdate } from '../models/email_channels/EmailTenantChannelUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';

class EmailChannelsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Supported Email Providers
   * @param data any
   */
  getSupportedEmailProviders(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/providers`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Email Configurations
   * @param data any
   */
  getEmailConfigurations(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/configurations`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Email Channels
   * @param data any
   */
  getEmailChannels(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/channels`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Email Channel
   * @param data EmailChannelCreate
   */
  createEmailChannel(data: EmailChannelCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/channels`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Email Channel By Id
   * @param channel_id string | number
   * @param data any
   */
  getEmailChannelById(channel_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/channels/${channel_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Email Channel
   * @param channel_id string | number
   * @param data EmailChannelUpdate
   */
  updateEmailChannel(channel_id: string | number, data: EmailChannelUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/channels/${channel_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Email Channel
   * @param channel_id string | number
   * @param data any
   */
  deleteEmailChannel(channel_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/channels/${channel_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Email Channel Status
   * @param channel_id string | number
   * @param data EmailChannelStatusUpdate
   */
  updateEmailChannelStatus(channel_id: string | number, data: EmailChannelStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/channels/${channel_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * List Tenant Email Channels
   * @param data any
   */
  listTenantEmailChannels(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/tenant-channels`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Tenant Email Channel
   * @param data EmailTenantChannelCreate
   */
  createTenantEmailChannel(data: EmailTenantChannelCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/tenant-channels`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Tenant Email Channel By Id
   * @param tenant_channel_id string | number
   * @param data any
   */
  getTenantEmailChannelById(tenant_channel_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/tenant-channels/${tenant_channel_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Tenant Email Channel
   * @param tenant_channel_id string | number
   * @param data EmailTenantChannelUpdate
   */
  updateTenantEmailChannel(tenant_channel_id: string | number, data: EmailTenantChannelUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/tenant-channels/${tenant_channel_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Tenant Email Channel
   * @param tenant_channel_id string | number
   * @param data any
   */
  deleteTenantEmailChannel(tenant_channel_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/email/tenant-channels/${tenant_channel_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

}

export default new EmailChannelsService();