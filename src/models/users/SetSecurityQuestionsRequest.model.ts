import { UserSecurityQuestionItem } from '../common/UserSecurityQuestionItem.model';

export interface SetSecurityQuestionsRequest {
  /**
   * 安全问题列表（1-5个），包含问题文本和答案
   */
  questions: UserSecurityQuestionItem[] | null;
}