import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface PublishRegionRead {
  /**
   * 租户ID，NULL为全局
   */
  tenant_id?: any | null;
  /**
   * 发行地区唯一编码（如 cn_mainland, tw_region_1）
   */
  region_code: string | null;
  /**
   * 发行地区名称
   */
  name: string | null;
  /**
   * 描述
   */
  description?: any | null;
  /**
   * 发行地区ID
   */
  region_id: number | null;
  /**
   * 状态
   */
  status: BaseStatus | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 是否已删除
   */
  is_deleted?: boolean | null;
  /**
   * 租户名称
   */
  tenant_name?: any | null;
  /**
   * 发行地区明细列表
   */
  areas?: any | null;
}