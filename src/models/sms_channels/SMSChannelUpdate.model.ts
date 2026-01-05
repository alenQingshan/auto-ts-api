export interface SMSChannelUpdate {
  /**
   * 渠道编码
   */
  provider_code?: any | null;
  /**
   * 渠道名称
   */
  name?: any | null;
  /**
   * API网关地址
   */
  endpoint?: any | null;
  /**
   * 适用区域
   */
  region?: any | null;
  /**
   * 短信签名
   */
  sign_name?: any | null;
  /**
   * 状态
   */
  status?: any | null;
  /**
   * 额外配置
   */
  metadata_json?: any | null;
}