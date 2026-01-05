import { BaseService, ExtOptions } from './base.service';
import { NewsPushTaskCreate } from '../models/news_push/NewsPushTaskCreate.model';
import { NewsPushTaskUpdate } from '../models/news_push/NewsPushTaskUpdate.model';
import { NewsPushTaskArticleBatchCreate } from '../models/news_push/NewsPushTaskArticleBatchCreate.model';
import { TaskPreviewRequest } from '../models/news_push/TaskPreviewRequest.model';
import { TaskTestSendRequest } from '../models/news_push/TaskTestSendRequest.model';

class NewsPushService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List News Push Tasks
   * @param data any
   */
  listNewsPushTasks(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/push/tasks`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create News Push Task
   * @param data NewsPushTaskCreate
   */
  createNewsPushTask(data: NewsPushTaskCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/push/tasks`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Update News Push Task
   * @param task_id string | number
   * @param data NewsPushTaskUpdate
   */
  updateNewsPushTask(task_id: string | number, data: NewsPushTaskUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/push/tasks/${task_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Get News Push Task
   * @param task_id string | number
   * @param data any
   */
  getNewsPushTask(task_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/push/tasks/${task_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Set Task Articles
   * @param task_id string | number
   * @param data NewsPushTaskArticleBatchCreate
   */
  setTaskArticles(task_id: string | number, data: NewsPushTaskArticleBatchCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/push/tasks/${task_id}/articles`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Get Task Articles
   * @param task_id string | number
   * @param data any
   */
  getTaskArticles(task_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/push/tasks/${task_id}/articles`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Preview Task
   * @param task_id string | number
   * @param data TaskPreviewRequest
   */
  previewTask(task_id: string | number, data: TaskPreviewRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/push/tasks/${task_id}/preview`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Test Send Task
   * @param task_id string | number
   * @param data TaskTestSendRequest
   */
  testSendTask(task_id: string | number, data: TaskTestSendRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/push/tasks/${task_id}/test-send`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Enqueue Task
   * @param task_id string | number
   * @param data any
   */
  enqueueTask(task_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/push/tasks/${task_id}:enqueue`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Cancel Task
   * @param task_id string | number
   * @param data any
   */
  cancelTask(task_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/push/tasks/${task_id}:cancel`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Task Logs
   * @param task_id string | number
   * @param data any
   */
  getTaskLogs(task_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/push/tasks/${task_id}/logs`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new NewsPushService();