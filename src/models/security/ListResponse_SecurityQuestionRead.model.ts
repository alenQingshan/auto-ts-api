import { app__backend__schemas__security__question_schema__SecurityQuestionRead } from './app__backend__schemas__security__question_schema__SecurityQuestionRead.model';

export interface ListResponse_SecurityQuestionRead {
  /**
   * data
   */
  data: app__backend__schemas__security__question_schema__SecurityQuestionRead[] | null;
  /**
   * count
   */
  count: number | null;
}