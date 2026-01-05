import { BaseService, ExtOptions } from './base.service';
import { LibTagCreate } from '../models/library_tags/LibTagCreate.model';
import { LibTagUpdate } from '../models/library_tags/LibTagUpdate.model';
import { LibTagStatusUpdate } from '../models/library_tags/LibTagStatusUpdate.model';
import { LibTagBookBind } from '../models/library_tags/LibTagBookBind.model';

class LibraryTagsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Tags
   * @param data any
   */
  getTags(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/tags`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Tag
   * @param data LibTagCreate
   */
  createTag(data: LibTagCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/tags`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Tags Options
   * @param data any
   */
  getTagsOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/tags/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Tag By Id
   * @param tag_id string | number
   * @param data any
   */
  getTagById(tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/tags/${tag_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Tag
   * @param tag_id string | number
   * @param data LibTagUpdate
   */
  updateTag(tag_id: string | number, data: LibTagUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/tags/${tag_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Tag
   * @param tag_id string | number
   * @param data any
   */
  deleteTag(tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/tags/${tag_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Tag Status
   * @param tag_id string | number
   * @param data LibTagStatusUpdate
   */
  updateTagStatus(tag_id: string | number, data: LibTagStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/tags/${tag_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Get Books By Tag Id
   * @param tag_id string | number
   * @param data any
   */
  getBooksByTagId(tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/tags/${tag_id}/books`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Bind Books To Tag
   * @param tag_id string | number
   * @param data LibTagBookBind
   */
  bindBooksToTag(tag_id: string | number, data: LibTagBookBind, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/tags/${tag_id}/books`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Unbind Books From Tag
   * @param tag_id string | number
   * @param data LibTagBookBind
   */
  unbindBooksFromTag(tag_id: string | number, data: LibTagBookBind, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/tags/${tag_id}/books`;
    return this.request<any>('delete', url, data, extOptions);
  }

}

export default new LibraryTagsService();