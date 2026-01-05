import { LanguageCode } from '../library_books/LanguageCode.model';
import { PublishRegion } from '../common/PublishRegion.model';
import { CulturalProductStorageType } from './CulturalProductStorageType.model';
import { CulturalProductSpecCreate } from './CulturalProductSpecCreate.model';
import { CulturalProductSkuCreate } from './CulturalProductSkuCreate.model';

export interface CulturalProductCreate {
  /**
   * 商品名称（默认语言）
   */
  name: string | null;
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
  language_code?: LanguageCode | null;
  /**
   * 适用/发行地区范围
   */
  publish_region?: PublishRegion | null;
  /**
   * 发行地区ID（关联 conf_publish_regions.region_id）
   */
  publish_region_id?: any | null;
  /**
   * 币种代码
   */
  currency_code?: string | null;
  /**
   * 是否使用SKU
   */
  use_sku?: boolean | null;
  /**
   * 商品基础价格
   */
  price?: number | null;
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
   * storage_type
   */
  storage_type?: CulturalProductStorageType | null;
  /**
   * 是否包邮
   */
  is_free_shipping?: boolean | null;
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
   * 扩展JSON
   */
  metadata_json?: any | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 供应商ID
   */
  provider_id?: any | null;
  /**
   * 分类ID列表
   */
  category_ids?: number[] | null;
  /**
   * 标签ID列表
   */
  tag_ids?: number[] | null;
  /**
   * 规格列表
   */
  specs?: CulturalProductSpecCreate[] | null;
  /**
   * SKU列表
   */
  skus?: CulturalProductSkuCreate[] | null;
  /**
   * 图片列表（相对路径）
   */
  images?: any | null;
  /**
   * 视频列表（相对路径）
   */
  videos?: any | null;
  /**
   * 创建的语言代码（用于多语言，多语言处理由 DAL 层自动完成）
   */
  lang?: any | null;
}