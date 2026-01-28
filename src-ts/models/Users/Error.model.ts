export interface Error {
  /**
   * code
   */
  code?: number | null;
  /**
   * message
   */
  message?: string | null;
  /**
   * details
   */
  details?: any | null;
}