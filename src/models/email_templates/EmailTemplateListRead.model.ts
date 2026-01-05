import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface EmailTemplateListRead {
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
   * 启用状态
   */
  status: BaseStatus | null;
  /**
   * 最后更新时间
   */
  updated_at: string | null;
}