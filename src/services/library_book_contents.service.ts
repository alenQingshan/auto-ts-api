import { BaseService, ExtOptions } from './base.service';
import { LibBookContentUpdate } from '../models/library_book_contents/LibBookContentUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { LibBookContentCreate } from '../models/library_book_contents/LibBookContentCreate.model';
import { LibBookContentBatchStatusUpdate } from '../models/library_book_contents/LibBookContentBatchStatusUpdate.model';
import { LibBookContentStatusUpdate } from '../models/library_book_contents/LibBookContentStatusUpdate.model';

class LibraryBookContentsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Content By Id
   * @param content_id string | number
   * @param data any
   */
  getContentById(content_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/contents/${content_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Content
   * @param content_id string | number
   * @param data LibBookContentUpdate
   */
  updateContent(content_id: string | number, data: LibBookContentUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/contents/${content_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Content
   * @param content_id string | number
   * @param data any
   */
  deleteContent(content_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/library/contents/${content_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Create Content
   * @param book_id string | number
   * @param data LibBookContentCreate
   */
  createContent(book_id: string | number, data: LibBookContentCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/books/${book_id}/contents`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Book Contents
   * @param book_id string | number
   * @param data any
   */
  getBookContents(book_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/books/${book_id}/contents`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Batch Update Content Status
   * @param data LibBookContentBatchStatusUpdate
   */
  batchUpdateContentStatus(data: LibBookContentBatchStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/categories/batch-content-status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Update Status
   * @param content_id string | number
   * @param data LibBookContentStatusUpdate
   */
  updateStatus(content_id: string | number, data: LibBookContentStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/contents/${content_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new LibraryBookContentsService();