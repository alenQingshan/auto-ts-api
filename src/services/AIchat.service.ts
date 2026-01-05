import { BaseService, ExtOptions } from './base.service';
import { AIChatQuickPromptCreate } from '../models/AI_chat/AIChatQuickPromptCreate.model';
import { AIChatQuickPromptUpdate } from '../models/AI_chat/AIChatQuickPromptUpdate.model';
import { AIChatQuickPromptStatusUpdate } from '../models/AI_chat/AIChatQuickPromptStatusUpdate.model';
import { AIChatQuickPromptBatchPublishStatusUpdate } from '../models/AI_chat/AIChatQuickPromptBatchPublishStatusUpdate.model';

class AIChatService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Ai Quick Prompts
   * @param data any
   */
  listAiQuickPrompts(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/ai-chat/quick-prompts`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Ai Quick Prompt
   * @param data AIChatQuickPromptCreate
   */
  createAiQuickPrompt(data: AIChatQuickPromptCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/ai-chat/quick-prompts`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Ai Quick Prompt
   * @param prompt_id string | number
   * @param data any
   */
  getAiQuickPrompt(prompt_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/ai-chat/quick-prompts/${prompt_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Ai Quick Prompt
   * @param prompt_id string | number
   * @param data AIChatQuickPromptUpdate
   */
  updateAiQuickPrompt(prompt_id: string | number, data: AIChatQuickPromptUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/ai-chat/quick-prompts/${prompt_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Ai Quick Prompt
   * @param prompt_id string | number
   * @param data any
   */
  deleteAiQuickPrompt(prompt_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/ai-chat/quick-prompts/${prompt_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Ai Quick Prompt Status
   * @param prompt_id string | number
   * @param data AIChatQuickPromptStatusUpdate
   */
  updateAiQuickPromptStatus(prompt_id: string | number, data: AIChatQuickPromptStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/ai-chat/quick-prompts/${prompt_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Batch Update Ai Quick Prompt Publish Status
   * @param data AIChatQuickPromptBatchPublishStatusUpdate
   */
  batchUpdateAiQuickPromptPublishStatus(data: AIChatQuickPromptBatchPublishStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/ai-chat/quick-prompts/batch-prompt-status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new AIChatService();