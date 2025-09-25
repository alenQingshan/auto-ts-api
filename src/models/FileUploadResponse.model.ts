export interface FileUploadResponse {
  /**
   * 保存后的文件名
   */
  filename: string | null;
  /**
   * 文件访问URL
   */
  url: string | null;
  /**
   * 响应消息
   */
  message?: string | null;
}