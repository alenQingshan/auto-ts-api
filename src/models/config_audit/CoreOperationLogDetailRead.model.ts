import { CoreOperationResultStatus } from '../users/CoreOperationResultStatus.model';

export interface CoreOperationLogDetailRead {
  /**
   * 日志ID
   */
  log_id: number | null;
  /**
   * 租户ID
   */
  tenant_id?: any | null;
  /**
   * 操作人ID
   */
  operator_id: number | null;
  /**
   * 操作人姓名
   */
  operator_name: string | null;
  /**
   * 操作人角色快照
   */
  operator_roles?: any | null;
  /**
   * 功能模块编码
   */
  module_code: string | null;
  /**
   * 动作
   */
  action: string | null;
  /**
   * 操作对象类型
   */
  object_type?: any | null;
  /**
   * 操作对象ID
   */
  object_id?: any | null;
  /**
   * 操作对象展示名称
   */
  object_display?: any | null;
  /**
   * HTTP方法
   */
  request_method?: any | null;
  /**
   * 请求路径
   */
  request_path?: any | null;
  /**
   * IP地址
   */
  request_ip?: any | null;
  /**
   * User-Agent
   */
  user_agent?: any | null;
  /**
   * 变化摘要说明
   */
  change_summary?: any | null;
  /**
   * 结果状态
   */
  result_status: CoreOperationResultStatus | null;
  /**
   * 错误信息
   */
  error_message?: any | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 变更前数据
   */
  before_data?: any | null;
  /**
   * 变更后数据
   */
  after_data?: any | null;
}