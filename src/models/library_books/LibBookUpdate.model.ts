import { LanguageCode } from './LanguageCode.model';

export interface LibBookUpdate {
  /**
   * lang
   */
  lang: LanguageCode | null;
  /**
   * 书名（默认繁体中文）
   */
  title?: any | null;
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
  recommend_type?: any | null;
  /**
   * 推荐阅读时长（分钟）
   */
  reading_duration?: any | null;
  /**
   * 计费类型
   */
  price_type?: any | null;
  /**
   * 价格
   */
  price?: any | null;
  /**
   * 是否可下载
   */
  is_downloadable?: any | null;
  /**
   * 主文件类型
   */
  file_type?: any | null;
  /**
   * APP 可见
   */
  show_in_app?: any | null;
  /**
   * Web 可见
   */
  show_in_web?: any | null;
  /**
   * 发行地区范围
   */
  publish_region?: any | null;
  /**
   * 所属分类
   */
  category_id?: any | null;
  /**
   * 默认语言代码
   */
  language_code?: any | null;
  /**
   * 标签ID列表
   */
  tag_ids?: any | null;
  /**
   * 默认音色列表
   */
  voice_ids?: any | null;
}