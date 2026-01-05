import { BaseService, ExtOptions } from './base.service';
import { EmailTemplateCreate } from '../models/email_templates/EmailTemplateCreate.model';
import { EmailTemplateUpdate } from '../models/email_templates/EmailTemplateUpdate.model';
import { EmailTemplateStatusUpdate } from '../models/email_templates/EmailTemplateStatusUpdate.model';

class EmailTemplatesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Email Templates
   * @param data any
   */
  getEmailTemplates(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/templates`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Email Template
   * @param data EmailTemplateCreate
   */
  createEmailTemplate(data: EmailTemplateCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/templates`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Email Template
   * @param template_id string | number
   * @param data any
   */
  getEmailTemplate(template_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/templates/${template_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Email Template
   * @param template_id string | number
   * @param data EmailTemplateUpdate
   */
  updateEmailTemplate(template_id: string | number, data: EmailTemplateUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/templates/${template_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Email Template
   * @param template_id string | number
   * @param data any
   */
  deleteEmailTemplate(template_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/templates/${template_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Email Template Status
   * @param template_id string | number
   * @param data EmailTemplateStatusUpdate
   */
  updateEmailTemplateStatus(template_id: string | number, data: EmailTemplateStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/email/templates/${template_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new EmailTemplatesService();