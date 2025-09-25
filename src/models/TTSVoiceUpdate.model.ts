export interface TTSVoiceUpdate {
  /**
   * 音色名称
   */
  name?: any | null;
  /**
   * 语言/地区
   */
  lang?: any | null;
  /**
   * 音色版本号
   */
  version?: any | null;
  /**
   * 关联 TTS 提供商～
   */
  provider_id?: any | null;
  /**
   * 音色头像
   */
  icon_url?: any | null;
  /**
   * 音色示例音频
   */
  sample_audio_url?: any | null;
  /**
   * 音色示例文本
   */
  sample_text?: any | null;
  /**
   * 其他样本文件
   */
  sample_files_json?: any | null;
  /**
   * 试听音频地址
   */
  preview_url?: any | null;
  /**
   * 扩展参数
   */
  metadata_json?: any | null;
  /**
   * 状态
   */
  status?: any | null;
}