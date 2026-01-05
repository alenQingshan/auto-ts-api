export interface NewsArticleItem {
  /**
   * 文章主键ID
   */
  article_id: number | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 内容类型（text/video）
   */
  article_type: string | null;
  /**
   * 文章标题
   */
  title: string | null;
  /**
   * 文章摘要
   */
  summary?: any | null;
  /**
   * HTML内容（用于内容理解）
   */
  content_html?: any | null;
  /**
   * 作者名称
   */
  author_text?: any | null;
  /**
   * 默认分类ID
   */
  category_id?: any | null;
  /**
   * 语言代码
   */
  language_code?: any | null;
  /**
   * 发行地区
   */
  publish_region?: any | null;
  /**
   * 发布状态
   */
  news_status: string | null;
  /**
   * 封面图片URL
   */
  cover_image_url?: any | null;
  /**
   * 新闻时间
   */
  news_time?: any | null;
  /**
   * 发布时间
   */
  published_at?: any | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 标签ID数组
   */
  tags?: any | null;
  /**
   * 分类ID数组
   */
  category_ids?: any | null;
  /**
   * 统计信息对象
   */
  stats?: any | null;
}