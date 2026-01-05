import { BaseStatus } from '../sms_templates/BaseStatus.model';
import { PublishRegion } from '../common/PublishRegion.model';
import { LanguageCode } from '../library_books/LanguageCode.model';

export interface LibTagCreate {
  /**
   * 标签名称
   */
  name: string | null;
  /**
   * 标签描述
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
   * 租户ID
   */
  tenant_id?: any | null;
  /**
   * 默认语言代码
   */
  lang?: LanguageCode | null;
}