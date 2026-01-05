export interface AIChatQuickPromptUpdate {
  /**
   * 气泡上展示的短文案
   */
  display_text?: any | null;
  /**
   * 点击后直接发送到对话框的文本
   */
  send_text?: any | null;
  /**
   * 可选：气泡小图标/emoji 名称或URL列表（支持多张图片）
   */
  icon?: any | null;
  /**
   * 展示位置
   */
  placement?: any | null;
  /**
   * 发起场景过滤
   */
  origin?: any | null;
  /**
   * 语言代码
   */
  language_code?: any | null;
  /**
   * 终端平台过滤
   */
  platform?: any | null;
  /**
   * 命中条件
   */
  conditions_json?: any | null;
  /**
   * A/B 实验分组标识
   */
  ab_group?: any | null;
  /**
   * 权重
   */
  weight?: any | null;
  /**
   * 排序
   */
  sort_order?: any | null;
  /**
   * 单用户日曝光上限
   */
  max_impressions_per_day?: any | null;
  /**
   * 开始生效（UTC）
   */
  effective_from?: any | null;
  /**
   * 结束生效（UTC）
   */
  effective_to?: any | null;
  /**
   * 状态
   */
  prompt_status?: any | null;
  /**
   * 更新的语言代码（用于多语言）
   */
  lang?: any | null;
}