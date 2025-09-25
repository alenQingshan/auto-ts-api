export interface TenantSMSChannelAssignAction {
  /**
   * 操作类型：assign/unassign
   */
  action: string | null;
  /**
   * 是否设为默认渠道
   */
  is_default?: any | null;
}