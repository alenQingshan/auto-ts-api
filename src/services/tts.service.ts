import { BaseService, ExtOptions } from './base.service';
import { TTSVoiceCreate } from '../models/TTSVoiceCreate.model';
import { TTSVoiceUpdate } from '../models/TTSVoiceUpdate.model';
import { TTSVoiceStatusUpdate } from '../models/TTSVoiceStatusUpdate.model';
import { TenantVoiceAssignAction } from '../models/TenantVoiceAssignAction.model';
import { ResponseSchema } from '../models/ResponseSchema.model';

class TTSService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Tts Voices
   * @param data any
   */
  getTtsVoices(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/voices`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Tts Voice
   * @param data TTSVoiceCreate
   */
  createTtsVoice(data: TTSVoiceCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/voices`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Tts Voice By Id
   * @param voice_id string | number
   * @param data any
   */
  getTtsVoiceById(voice_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/voices/${voice_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Tts Voice
   * @param voice_id string | number
   * @param data TTSVoiceUpdate
   */
  updateTtsVoice(voice_id: string | number, data: TTSVoiceUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/voices/${voice_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Tts Voice
   * @param voice_id string | number
   * @param data any
   */
  deleteTtsVoice(voice_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/voices/${voice_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Tts Voice Status
   * @param voice_id string | number
   * @param data TTSVoiceStatusUpdate
   */
  updateTtsVoiceStatus(voice_id: string | number, data: TTSVoiceStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/voices/${voice_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Get Tenant Voices
   * @param data any
   */
  getTenantVoices(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/tenant-voices`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Manage Tenant Voice Assignment
   * @param tenant_id string | number
   * @param voice_id string | number
   * @param data TenantVoiceAssignAction
   */
  manageTenantVoiceAssignment(tenant_id: string | number, voice_id: string | number, data: TenantVoiceAssignAction, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/api/v1/tenant/${tenant_id}/voices/${voice_id}`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

}

export default new TTSService();