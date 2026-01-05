export interface app__backend__schemas__auth__security_question_schema__SecurityQuestionRead {
  /**
   * 用户安全问题ID
   */
  question_id: number | null;
  /**
   * 安全问题内容
   */
  question: string | null;
  /**
   * 问题顺序
   */
  question_order: number | null;
}