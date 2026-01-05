import { EmailTemplateListRead } from './EmailTemplateListRead.model';

export interface ListResponse_EmailTemplateListRead {
  /**
   * data
   */
  data: EmailTemplateListRead[] | null;
  /**
   * count
   */
  count: number | null;
}