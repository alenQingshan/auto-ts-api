import { SMSTemplateListRead } from './SMSTemplateListRead.model';

export interface ListResponse_SMSTemplateListRead {
  /**
   * data
   */
  data: SMSTemplateListRead[] | null;
  /**
   * count
   */
  count: number | null;
}