export interface CulturalProductUpdate {
  /**
   * 更新的语言代码（用于多语言，多语言处理由 DAL 层自动完成）
   */
  lang?: any | null;
  /**
   * 商品名称
   */
  name?: any | null;
  /**
   * 商品简介
   */
  short_description?: any | null;
  /**
   * 详情富文本
   */
  detail_html?: any | null;
  /**
   * 厂商描述富文本
   */
  vendor_desc_html?: any | null;
  /**
   * 售后服务富文本
   */
  aftersale_html?: any | null;
  /**
   * 默认语言代码
   */
  language_code?: any | null;
  /**
   * 适用/发行地区范围
   */
  publish_region?: any | null;
  /**
   * 发行地区ID（关联 conf_publish_regions.region_id）
   */
  publish_region_id?: any | null;
  /**
   * 币种代码
   */
  currency_code?: any | null;
  /**
   * 是否使用SKU
   */
  use_sku?: any | null;
  /**
   * 商品基础价格
   */
  price?: any | null;
  /**
   * 优惠价
   */
  promo_price?: any | null;
  /**
   * 优惠开始日期
   */
  promo_start_at?: any | null;
  /**
   * 优惠结束日期
   */
  promo_end_at?: any | null;
  /**
   * 限购数量
   */
  purchase_limit?: any | null;
  /**
   * 库存
   */
  stock_quantity?: any | null;
  /**
   * 重量（克）
   */
  weight_gram?: any | null;
  /**
   * 存储类型
   */
  storage_type?: any | null;
  /**
   * 是否包邮
   */
  is_free_shipping?: any | null;
  /**
   * 运费模板ID
   */
  freight_template_id?: any | null;
  /**
   * 预约上架时间
   */
  scheduled_on?: any | null;
  /**
   * 商家内部编码/货号
   */
  merchant_code?: any | null;
  /**
   * 供应商ID
   */
  provider_id?: any | null;
  /**
   * 分类ID列表
   */
  category_ids?: any | null;
  /**
   * 标签ID列表
   */
  tag_ids?: any | null;
  /**
   * 规格列表
   */
  specs?: any | null;
  /**
   * SKU列表
   */
  skus?: any | null;
  /**
   * 图片列表（相对路径）
   */
  images?: any | null;
  /**
   * 视频列表（相对路径）
   */
  videos?: any | null;
  /**
   * 扩展JSON
   */
  metadata_json?: any | null;
}