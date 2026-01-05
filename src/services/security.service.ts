import { BaseService, ExtOptions } from './base.service';
import { SecurityQuestionCreate } from '../models/security/SecurityQuestionCreate.model';
import { SecurityQuestionUpdate } from '../models/security/SecurityQuestionUpdate.model';
import { SecurityQuestionStatusUpdate } from '../models/security/SecurityQuestionStatusUpdate.model';

class SecurityService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Create Security Question
   * @param data SecurityQuestionCreate
   */
  createSecurityQuestion(data: SecurityQuestionCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/security/questions`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Security Questions
   * @param data any
   */
  getSecurityQuestions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/security/questions`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Security Question
   * @param question_id string | number
   * @param data any
   */
  getSecurityQuestion(question_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/security/questions/${question_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Security Question
   * @param question_id string | number
   * @param data SecurityQuestionUpdate
   */
  updateSecurityQuestion(question_id: string | number, data: SecurityQuestionUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/security/questions/${question_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Security Question
   * @param question_id string | number
   * @param data any
   */
  deleteSecurityQuestion(question_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/security/questions/${question_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Question Status
   * @param question_id string | number
   * @param data SecurityQuestionStatusUpdate
   */
  updateQuestionStatus(question_id: string | number, data: SecurityQuestionStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/security/questions/${question_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new SecurityService();