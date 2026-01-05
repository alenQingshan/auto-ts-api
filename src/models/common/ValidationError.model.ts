export interface ValidationError {
  /**
   * loc
   */
  loc: any[] | null;
  /**
   * msg
   */
  msg: string | null;
  /**
   * type
   */
  type: string | null;
}