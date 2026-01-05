import { BaseStatus } from '../sms_templates/BaseStatus.model';
import { CulturalSkuSpecValueItem } from './CulturalSkuSpecValueItem.model';

export interface CulturalProductSkuRead {
  /**
   * 内部编码
   */
  sku_code?: any | null;
  /**
   * 条形码
   */
  barcode?: any | null;
  /**
   * SKU名称
   */
  name?: any | null;
  /**
   * 价格
   */
  price?: number | null;
  /**
   * 优惠价
   */
  promo_price?: any | null;
  /**
   * 限购数量
   */
  purchase_limit?: any | null;
  /**
   * 库存数量
   */
  stock_quantity?: number | null;
  /**
   * 重量（克）
   */
  weight_gram?: any | null;
  /**
   * SKU专属图片
   */
  image_url?: any | null;
  /**
   * 是否默认SKU
   */
  is_default?: boolean | null;
  /**
   * 状态
   */
  status?: BaseStatus | null;
  /**
   * 优惠开始日期
   */
  promo_start_at?: any | null;
  /**
   * 优惠结束日期
   */
  promo_end_at?: any | null;
  /**
   * 规格值ID列表（已废弃，由 values 字段代替，保留用于向后兼容）
   */
  spec_value_ids?: number[] | null;
  /**
   * SKU ID
   */
  sku_id: number | null;
  /**
   * 商品ID
   */
  product_id: number | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 规格组合Key
   */
  spec_key?: any | null;
  /**
   * 规格值列表
   */
  spec_values?: CulturalSkuSpecValueItem[] | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 软删除标志
   */
  is_deleted: boolean | null;
}