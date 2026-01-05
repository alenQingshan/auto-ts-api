import { BaseStatus } from '../sms_templates/BaseStatus.model';
import { PublishRegion } from '../common/PublishRegion.model';
import { LanguageCode } from '../library_books/LanguageCode.model';

export interface LibTagRead {
  /**
   * 翻译后的名称
   */
  name?: any | null;
  /**
   * 翻译后的描述
   */
  description?: any | null;
  /**
   * 图标
   */
  icon?: any | null;
  /**
   * 展示颜色
   */
  color?: any | null;
  /**
   * 排序
   */
  sort_order?: number | null;
  /**
   * 状态
   */
  status?: BaseStatus | null;
  /**
   * 发行地区范围
   */
  publish_region?: PublishRegion | null;
  /**
   * 标签ID
   */
  tag_id: number | null;
  /**
   * 租户ID
   */
  tenant_id?: any | null;
  /**
   * 默认语言代码
   */
  language_code: LanguageCode | null;
  /**
   * 创建时间
   */
  created_at?: string | null;
  /**
   * 更新时间
   */
  updated_at?: string | null;
  /**
   * 当前请求的语言代码
   */
  lang?: any | null;
}