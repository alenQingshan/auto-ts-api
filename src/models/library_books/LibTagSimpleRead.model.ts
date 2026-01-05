import { PublishRegion } from '../common/PublishRegion.model';
import { LanguageCode } from './LanguageCode.model';

export interface LibTagSimpleRead {
  /**
   * 标签ID
   */
  tag_id: number | null;
  /**
   * 标签名称
   */
  name: string | null;
  /**
   * 排序
   */
  sort_order?: any | null;
  /**
   * 发行地区范围
   */
  publish_region?: PublishRegion | null;
  /**
   * 当前语言代码
   */
  lang?: any | null;
  /**
   * 默认语言代码
   */
  language_code?: LanguageCode | null;
}