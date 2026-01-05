import { AuthorStatus } from '../common/AuthorStatus.model';

export interface NewsAuthorStatusUpdate {
  /**
   * 状态
   */
  status: AuthorStatus | null;
}