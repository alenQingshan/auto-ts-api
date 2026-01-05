import { TTSVoiceStatus } from './TTSVoiceStatus.model';

export interface TTSVoiceCreate {
  /**
   * 音色名称（如 Xiaoxiao, Jenny）
   */
  name: string | null;
  /**
   * 语言/地区（如 zh-CN, en-US）
   */
  lang: string | null;
  /**
   * 音色版本号
   */
  version?: string | null;
  /**
   * 关联 TTS 提供商
   */
  provider_id?: any | null;
  /**
   * 状态
   */
  status?: TTSVoiceStatus | null;
  /**
   * 音色头像（可视化展示用）
   */
  icon_url?: any | null;
  /**
   * 音色示例音频（mp3/wav）
   */
  sample_audio_url?: any | null;
  /**
   * 音色示例文本
   */
  sample_text?: any | null;
  /**
   * 其他样本文件（如多个 mp3、txt、wav），兼容 fishaudio 字段
   */
  sample_files_json?: any | null;
  /**
   * 试听音频地址
   */
  preview_url?: any | null;
  /**
   * 扩展参数（速率、音高、风格、fishaudio 对应字段）
   */
  metadata_json?: any | null;
}