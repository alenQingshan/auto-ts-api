import { PublishRegion } from '../common/PublishRegion.model';

export interface LibTagsOption {
  /**
   * 标签ID
   */
  tag_id: number | null;
  /**
   * lang
   */
  lang: any | null;
  /**
   * 标签名称（当前语言）
   */
  name: string | null;
  /**
   * 发行地区范围
   */
  publish_region: PublishRegion | null;
}