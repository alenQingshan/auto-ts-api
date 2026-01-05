import { LibBookStatus } from './LibBookStatus.model';

export interface LibBookBatchStatusUpdate {
  /**
   * 书籍ID列表
   */
  book_ids: number[] | null;
  /**
   * 发布状态
   */
  status: LibBookStatus | null;
}