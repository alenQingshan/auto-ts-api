export interface VegRecipeArticleVideoUpdate {
  /**
   * 视频来源：external=第三方URL、internal=平台上传
   */
  video_source?: any | null;
  /**
   * 视频播放URL
   */
  video_url?: any | null;
  /**
   * 视频封面图URL
   */
  cover_image_url?: any | null;
  /**
   * 视频时长（秒）
   */
  duration_seconds?: any | null;
  /**
   * 来源平台
   */
  source_platform?: any | null;
}