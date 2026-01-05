import { BaseService, ExtOptions } from './base.service';
import { LibBookCreate } from '../models/library_books/LibBookCreate.model';
import { LibBookUpdate } from '../models/library_books/LibBookUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { LibBookStatusUpdate } from '../models/library_books/LibBookStatusUpdate.model';
import { LibBookBatchStatusUpdate } from '../models/library_books/LibBookBatchStatusUpdate.model';

class LibraryBooksService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get All Books
   * @param data any
   */
  getAllBooks(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/books`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Book
   * @param data LibBookCreate
   */
  createBook(data: LibBookCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/books`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Book By Id
   * @param book_id string | number
   * @param data any
   */
  getBookById(book_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/books/${book_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Book
   * @param book_id string | number
   * @param data LibBookUpdate
   */
  updateBook(book_id: string | number, data: LibBookUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/books/${book_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Book
   * @param book_id string | number
   * @param data any
   */
  deleteBook(book_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/library/books/${book_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Book Status
   * @param book_id string | number
   * @param data LibBookStatusUpdate
   */
  updateBookStatus(book_id: string | number, data: LibBookStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/books/${book_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Batch Update Book Publish Status
   * @param data LibBookBatchStatusUpdate
   */
  batchUpdateBookPublishStatus(data: LibBookBatchStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/library/books/batch-book-status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new LibraryBooksService();