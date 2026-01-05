import { NewsArticleVideoSourceType } from '../news_articles/NewsArticleVideoSourceType.model';

export interface VegRecipeArticleVideoCreate {
  /**
   * 视频来源：external=第三方URL、internal=平台上传
   */
  video_source?: NewsArticleVideoSourceType | null;
  /**
   * 视频播放URL（必填，CDN/第三方直链等）
   */
  video_url: string | null;
  /**
   * 视频封面图URL
   */
  cover_image_url?: any | null;
  /**
   * 视频时长（秒）
   */
  duration_seconds?: any | null;
  /**
   * 来源平台（如 self, youtube, vimeo 等）
   */
  source_platform?: any | null;
}