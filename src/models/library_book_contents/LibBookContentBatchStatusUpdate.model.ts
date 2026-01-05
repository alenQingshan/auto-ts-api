import { LibBookContentStatus } from '../library_books/LibBookContentStatus.model';

export interface LibBookContentBatchStatusUpdate {
  /**
   * 章节ID列表
   */
  content_ids: number[] | null;
  /**
   * 发布状态: draft/pending/published/archived
   */
  content_status: LibBookContentStatus | null;
}