import { BaseService, ExtOptions } from './base.service';
import { SMSTemplateCreate } from '../models/sms_templates/SMSTemplateCreate.model';
import { SMSTemplateUpdate } from '../models/sms_templates/SMSTemplateUpdate.model';
import { SMSTemplateStatusUpdate } from '../models/sms_templates/SMSTemplateStatusUpdate.model';

class SmsTemplatesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Sms Templates
   * @param data any
   */
  getSmsTemplates(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/templates`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Sms Template
   * @param data SMSTemplateCreate
   */
  createSmsTemplate(data: SMSTemplateCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/templates`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Sms Template
   * @param template_id string | number
   * @param data any
   */
  getSmsTemplate(template_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/templates/${template_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Sms Template
   * @param template_id string | number
   * @param data SMSTemplateUpdate
   */
  updateSmsTemplate(template_id: string | number, data: SMSTemplateUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/templates/${template_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Sms Template
   * @param template_id string | number
   * @param data any
   */
  deleteSmsTemplate(template_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/templates/${template_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Sms Template Status
   * @param template_id string | number
   * @param data SMSTemplateStatusUpdate
   */
  updateSmsTemplateStatus(template_id: string | number, data: SMSTemplateStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/sms/templates/${template_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new SmsTemplatesService();