import { AutomationRule } from './AutomationRule.model';

export interface ListResponse_AutomationRule {
  /**
   * data
   */
  data: AutomationRule[] | null;
  /**
   * count
   */
  count: number | null;
}