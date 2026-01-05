import { NewsArticleItem } from '../news_articles/NewsArticleItem.model';

export interface NewsArticlesListResponse {
  /**
   * 返回的文章总数
   */
  count: number | null;
  /**
   * 文章信息数组
   */
  items: NewsArticleItem[] | null;
}