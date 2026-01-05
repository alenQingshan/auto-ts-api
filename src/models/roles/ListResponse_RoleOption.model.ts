import { RoleOption } from '../common/RoleOption.model';

export interface ListResponse_RoleOption {
  /**
   * data
   */
  data: RoleOption[] | null;
  /**
   * count
   */
  count: number | null;
}