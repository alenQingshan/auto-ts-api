import { LibBookRecommendType } from './LibBookRecommendType.model';
import { LibBookPriceType } from './LibBookPriceType.model';
import { LibBookFileType } from './LibBookFileType.model';
import { PublishRegion } from '../common/PublishRegion.model';
import { LanguageCode } from './LanguageCode.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';
import { LibBookStatus } from './LibBookStatus.model';

export interface LibBookRead {
  /**
   * 书名（默认繁体中文）
   */
  title: string | null;
  /**
   * 作者
   */
  author?: any | null;
  /**
   * 出版社
   */
  publisher?: any | null;
  /**
   * 出版年份
   */
  publish_year?: any | null;
  /**
   * ISBN 编号
   */
  isbn?: any | null;
  /**
   * 书籍简介（默认繁体中文）
   */
  description?: any | null;
  /**
   * PDF 文件路径/URL
   */
  pdf_path?: any | null;
  /**
   * 封面图路径/URL
   */
  cover_image?: any | null;
  /**
   * 推荐类型
   */
  recommend_type?: LibBookRecommendType | null;
  /**
   * 推荐阅读时长（分钟）
   */
  reading_duration?: any | null;
  /**
   * 计费类型
   */
  price_type?: LibBookPriceType | null;
  /**
   * 价格
   */
  price?: number | null;
  /**
   * 是否可下载
   */
  is_downloadable?: boolean | null;
  /**
   * 主文件类型
   */
  file_type?: LibBookFileType | null;
  /**
   * APP 可见
   */
  show_in_app?: boolean | null;
  /**
   * Web 可见
   */
  show_in_web?: boolean | null;
  /**
   * 发行地区范围
   */
  publish_region?: PublishRegion | null;
  /**
   * 书籍ID
   */
  book_id: number | null;
  /**
   * 当前语言代码
   */
  lang?: any | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 所属分类
   */
  category_id?: any | null;
  /**
   * 默认语言代码
   */
  language_code: LanguageCode | null;
  /**
   * 上架状态
   */
  status: BaseStatus | null;
  /**
   * 发布状态
   */
  book_status: LibBookStatus | null;
  /**
   * 审核人
   */
  audited_by?: any | null;
  /**
   * 审核时间
   */
  audited_at?: any | null;
  /**
   * 首次发布时间
   */
  published_at?: any | null;
  /**
   * 下架时间
   */
  unpublished_at?: any | null;
  /**
   * created_at
   */
  created_at: string | null;
  /**
   * updated_at
   */
  updated_at: string | null;
  /**
   * is_deleted
   */
  is_deleted: boolean | null;
  /**
   * 标签ID列表
   */
  tag_ids?: any | null;
  /**
   * VoiceID列表
   */
  voice_ids?: any | null;
  /**
   * 章节列表
   */
  contents?: any | null;
  /**
   * 统计数据
   */
  stats?: any | null;
}