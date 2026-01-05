export interface SendVerificationCodeResponse {
  /**
   * message
   */
  message?: string | null;
  /**
   * 过期时间（分钟）
   */
  expire_minutes?: number | null;
}