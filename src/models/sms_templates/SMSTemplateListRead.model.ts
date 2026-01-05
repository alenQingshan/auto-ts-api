import { BaseStatus } from './BaseStatus.model';

export interface SMSTemplateListRead {
  /**
   * 主键ID
   */
  template_id: number | null;
  /**
   * 模板代码
   */
  code: string | null;
  /**
   * 模板名称
   */
  title: string | null;
  /**
   * 模板描述
   */
  description?: any | null;
  /**
   * 厂商代码
   */
  provider_code?: any | null;
  /**
   * 状态：启用/禁用
   */
  status: BaseStatus | null;
  /**
   * 最后更新时间
   */
  updated_at: string | null;
}