import { CulturalProviderEmployeeRole } from '../cultural_products/CulturalProviderEmployeeRole.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface CulturalProviderEmployeeCreate {
  /**
   * 用户ID
   */
  user_id: number | null;
  /**
   * 角色
   */
  role_type?: CulturalProviderEmployeeRole | null;
  /**
   * 状态
   */
  status?: BaseStatus | null;
}