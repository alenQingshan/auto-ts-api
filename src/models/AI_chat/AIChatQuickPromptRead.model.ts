import { AIChatQuickPromptPlacement } from './AIChatQuickPromptPlacement.model';
import { LanguageCode } from '../library_books/LanguageCode.model';
import { AIChatQuickPromptPlatform } from './AIChatQuickPromptPlatform.model';
import { AIChatQuickPromptStatus } from './AIChatQuickPromptStatus.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface AIChatQuickPromptRead {
  /**
   * 租户ID，NULL为全局
   */
  tenant_id?: any | null;
  /**
   * 气泡上展示的短文案
   */
  display_text: string | null;
  /**
   * 点击后直接发送到对话框的文本
   */
  send_text: string | null;
  /**
   * 可选：气泡小图标/emoji 名称或URL列表（支持多张图片）
   */
  icon?: any | null;
  /**
   * 展示位置
   */
  placement?: AIChatQuickPromptPlacement | null;
  /**
   * 发起场景过滤，如 home, article, book_detail, faq_page；NULL=任意
   */
  origin?: any | null;
  /**
   * 语言代码
   */
  language_code?: LanguageCode | null;
  /**
   * 终端平台过滤
   */
  platform?: AIChatQuickPromptPlatform | null;
  /**
   * 命中条件：如{ "user_tags":["newbie"], "article_category":[18], "time_range":"night" }
   */
  conditions_json?: any | null;
  /**
   * A/B 实验分组标识
   */
  ab_group?: any | null;
  /**
   * 同位置/同场景下的权重（越大越靠前，次于sort_order）
   */
  weight?: number | null;
  /**
   * 显式排序（优先级最高）
   */
  sort_order?: number | null;
  /**
   * 单用户日曝光上限，NULL不限制
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
  prompt_status?: AIChatQuickPromptStatus | null;
  /**
   * 快捷提问ID
   */
  prompt_id: number | null;
  /**
   * 启用/禁用状态
   */
  status: BaseStatus | null;
  /**
   * 创建人
   */
  created_by?: any | null;
  /**
   * 最后修改人
   */
  updated_by?: any | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 是否删除
   */
  is_deleted?: boolean | null;
  /**
   * 当前请求的语言代码
   */
  lang?: any | null;
}