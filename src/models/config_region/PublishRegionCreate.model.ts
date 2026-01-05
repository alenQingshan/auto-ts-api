export interface PublishRegionCreate {
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
}