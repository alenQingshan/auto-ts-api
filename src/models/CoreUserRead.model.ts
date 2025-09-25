import { UserType } from './UserType.model';
import { UserStatus } from './UserStatus.model';

export interface CoreUserRead {
  /**
   * 租户ID
   */
  tenant_id?: any | null;
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
  status?: UserStatus | null;
  /**
   * 用户ID
   */
  user_id: number | null;
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
  /**
   * 角色ID，C端用户为空
   */
  role_id?: any | null;
}