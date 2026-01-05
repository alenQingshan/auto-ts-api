export interface CulturalProductSpecCreate {
  /**
   * 规格ID
   */
  spec_id: number | null;
  /**
   * 排序
   */
  sort_order?: number | null;
  /**
   * 规格维度展示图片
   */
  image_url?: any | null;
  /**
   * 加价
   */
  extra_price?: any | null;
  /**
   * 关联的规格值ID列表
   */
  value_ids?: number[] | null;
  /**
   * 关联的规格值列表
   */
  values?: any | null;
}