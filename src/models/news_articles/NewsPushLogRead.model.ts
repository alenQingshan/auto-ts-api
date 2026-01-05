import { PushSendStatus } from '../common/PushSendStatus.model';

export interface NewsPushLogRead {
  /**
   * 接收邮箱
   */
  email: string | null;
  /**
   * 用户ID
   */
  user_id?: any | null;
  /**
   * 日志ID
   */
  log_id: number | null;
  /**
   * 推送任务ID
   */
  task_id: number | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 发送状态
   */
  send_status: PushSendStatus | null;
  /**
   * 发送时间
   */
  sent_at?: any | null;
  /**
   * 错误信息
   */
  error_message?: any | null;
  /**
   * 重试次数
   */
  retry_count: number | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
}