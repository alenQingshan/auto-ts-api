import { NewsArticleType } from './NewsArticleType.model';
import { LanguageCode } from '../library_books/LanguageCode.model';
import { PublishRegion } from '../common/PublishRegion.model';
import { NewsArticleStatus } from './NewsArticleStatus.model';

export interface NewsArticleCreate {
  /**
   * 新闻内容类型（text, video 等）
   */
  article_type?: NewsArticleType | null;
  /**
   * 标题
   */
  title: string | null;
  /**
   * 摘要
   */
  summary?: any | null;
  /**
   * 内容（富文本HTML）
   */
  content_html?: any | null;
  /**
   * 作者（自由文本）
   */
  author_text?: any | null;
  /**
   * 语言代码
   */
  language_code?: LanguageCode | null;
  /**
   * 发行地区
   */
  publish_region?: PublishRegion | null;
  /**
   * 发行地区ID（关联 conf_publish_regions.region_id）
   */
  publish_region_id?: any | null;
  /**
   * 发布状态
   */
  news_status?: NewsArticleStatus | null;
  /**
   * 新闻时间
   */
  news_time?: any | null;
  /**
   * 预发布时间
   */
  pre_published_at?: any | null;
  /**
   * 转载单位
   */
  reprint_source?: any | null;
  /**
   * 是否转载
   */
  is_reprinted?: any | null;
  /**
   * 关联作者id
   */
  author_id?: any | null;
  /**
   * 标签ID列表
   */
  tag_ids?: any | null;
  /**
   * 分类ID
   */
  category_ids?: any | null;
  /**
   * 关联图片
   */
  images?: any | null;
  /**
   * 相关联的tts
   */
  voice_ids?: any | null;
  /**
   * 视频信息（当 article_type 为 video 时必填）
   */
  video?: any | null;
  /**
   * 默认语言代码
   */
  lang?: LanguageCode | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 创建人ID
   */
  created_by?: any | null;
}