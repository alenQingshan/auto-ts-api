import { BaseService, ExtOptions } from './base.service';
import { NewsAuthorCreate } from '../models/news_authors/NewsAuthorCreate.model';
import { NewsAuthorUpdate } from '../models/news_authors/NewsAuthorUpdate.model';
import { NewsAuthorStatusUpdate } from '../models/news_authors/NewsAuthorStatusUpdate.model';

class NewsAuthorsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Authors
   * @param data any
   */
  getAuthors(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/authors`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Author
   * @param data NewsAuthorCreate
   */
  createAuthor(data: NewsAuthorCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/authors`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get News Authors Options
   * @param data any
   */
  getNewsAuthorsOptions(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/authors/options`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Author
   * @param author_id string | number
   * @param data any
   */
  getAuthor(author_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/authors/${author_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Author
   * @param author_id string | number
   * @param data NewsAuthorUpdate
   */
  updateAuthor(author_id: string | number, data: NewsAuthorUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/authors/${author_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Author
   * @param author_id string | number
   * @param data any
   */
  deleteAuthor(author_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/authors/${author_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Update Author Status
   * @param author_id string | number
   * @param data NewsAuthorStatusUpdate
   */
  updateAuthorStatus(author_id: string | number, data: NewsAuthorStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/news/authors/${author_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new NewsAuthorsService();