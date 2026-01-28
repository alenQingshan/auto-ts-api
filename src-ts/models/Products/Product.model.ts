export interface Product {
  /**
   * id
   */
  id?: number | null;
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
  /**
   * created_at
   */
  created_at?: string | null;
  /**
   * updated_at
   */
  updated_at?: string | null;
}