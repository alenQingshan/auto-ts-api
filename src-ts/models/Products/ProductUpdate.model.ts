export interface ProductUpdate {
  /**
   * name
   */
  name?: string | null;
  /**
   * description
   */
  description?: string | null;
  /**
   * price
   */
  price?: number | null;
  /**
   * category
   */
  category?: string | null;
  /**
   * stock
   */
  stock?: number | null;
  /**
   * images
   */
  images?: string[] | null;
  /**
   * status
   */
  status?: string | null;
}