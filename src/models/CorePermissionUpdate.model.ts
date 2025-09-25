export interface CorePermissionUpdate {
  /**
   * 父权限ID，顶层权限为空
   */
  parent_id?: any | null;
  /**
   * 权限编码
   */
  code?: any | null;
  /**
   * 权限名称
   */
  name?: any | null;
  /**
   * 描述
   */
  description?: any | null;
  /**
   * 权限状态
   */
  status?: any | null;
}