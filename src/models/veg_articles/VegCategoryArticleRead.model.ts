export interface VegCategoryArticleRead {
  /**
   * 文章ID
   */
  article_id: number | null;
  /**
   * 文章标题
   */
  title: string | null;
  /**
   * 新闻时间
   */
  news_time?: any | null;
  /**
   * 图片列表
   */
  images?: any | null;
  /**
   * PC版URL
   */
  url?: any | null;
}