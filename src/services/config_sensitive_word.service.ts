import { BaseService, ExtOptions } from './base.service';
import { SensitiveWordCreate } from '../models/config_sensitive_word/SensitiveWordCreate.model';
import { SensitiveWordUpdate } from '../models/config_sensitive_word/SensitiveWordUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { SensitiveWordStatusUpdate } from '../models/config_sensitive_word/SensitiveWordStatusUpdate.model';

class ConfigSensitiveWordService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get All Words
   * @param data any
   */
  getAllWords(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/sensitive-words`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Word
   * @param data SensitiveWordCreate
   */
  createWord(data: SensitiveWordCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/sensitive-words`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Active Words
   * @param data any
   */
  getActiveWords(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/sensitive-words/active`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Word By Id
   * @param word_id string | number
   * @param data any
   */
  getWordById(word_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/sensitive-words/${word_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Word
   * @param word_id string | number
   * @param data SensitiveWordUpdate
   */
  updateWord(word_id: string | number, data: SensitiveWordUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/sensitive-words/${word_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Word
   * @param word_id string | number
   * @param data any
   */
  deleteWord(word_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/conf/sensitive-words/${word_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Word Status
   * @param word_id string | number
   * @param data SensitiveWordStatusUpdate
   */
  updateWordStatus(word_id: string | number, data: SensitiveWordStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/sensitive-words/${word_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Bulk Create Words
   * @param data SensitiveWordCreate[]
   */
  bulkCreateWords(data: SensitiveWordCreate[], extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/conf/sensitive-words/bulk`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

}

export default new ConfigSensitiveWordService();