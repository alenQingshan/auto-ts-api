import { CulturalProductSpecValueItem } from './CulturalProductSpecValueItem.model';

export interface CulturalProductSpecRead {
  /**
   * 商品-规格关系ID
   */
  product_spec_id: number | null;
  /**
   * 商品ID
   */
  product_id: number | null;
  /**
   * 规格ID
   */
  spec_id: number | null;
  /**
   * 规格名称
   */
  spec_name?: any | null;
  /**
   * 排序
   */
  sort_order: number | null;
  /**
   * 规格维度展示图片
   */
  image_url?: any | null;
  /**
   * 加价
   */
  extra_price?: any | null;
  /**
   * 规格值列表
   */
  values?: CulturalProductSpecValueItem[] | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
}