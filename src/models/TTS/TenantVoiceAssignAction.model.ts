export interface TenantVoiceAssignAction {
  /**
   * 操作类型: 'assign' 分配, 'unassign' 取消分配
   */
  action: string | null;
  /**
   * 是否设置为默认音色(仅在 assign 操作时有效)
   */
  is_default?: any | null;
}