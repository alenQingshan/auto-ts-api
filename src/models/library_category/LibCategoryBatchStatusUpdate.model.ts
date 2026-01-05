import { LibPublishStatus } from '../library_books/LibPublishStatus.model';

export interface LibCategoryBatchStatusUpdate {
  /**
   * 分类ID列表
   */
  category_ids: number[] | null;
  /**
   * 发布状态：draft=草稿, pending=待审核, published=已发布, archived=已归档
   */
  status: LibPublishStatus | null;
}