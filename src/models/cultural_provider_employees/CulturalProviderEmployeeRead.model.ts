import { UserType } from '../common/UserType.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';
import { CulturalProviderEmployeeRole } from '../cultural_products/CulturalProviderEmployeeRole.model';

export interface CulturalProviderEmployeeRead {
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 用户名
   */
  username?: any | null;
  /**
   * 用户类型
   */
  user_type?: UserType | null;
  /**
   * 邮箱
   */
  email?: any | null;
  /**
   * 手机号
   */
  phone?: any | null;
  /**
   * 手机号国家代码（如 +86, +1）
   */
  phone_country_code?: any | null;
  /**
   * 昵称
   */
  display_name?: any | null;
  /**
   * 头像资源ID
   */
  avatar_asset_id?: any | null;
  /**
   * 默认语言
   */
  default_locale?: any | null;
  /**
   * 默认时区
   */
  default_tz?: any | null;
  /**
   * 状态
   */
  status: BaseStatus | null;
  /**
   * 员工ID
   */
  employee_id: number | null;
  /**
   * 供应商ID
   */
  provider_id: number | null;
  /**
   * 用户ID
   */
  user_id: number | null;
  /**
   * 角色
   */
  role_type: CulturalProviderEmployeeRole | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 软删除标记
   */
  is_deleted: boolean | null;
}