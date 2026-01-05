export interface ActionRead {
  /**
   * 动作类名，如 SendEmailAction
   */
  class_name: string | null;
  /**
   * 动作参数
   */
  options?: any | null;
  /**
   * id
   */
  id: number | null;
}