import { MerchantStatus } from './MerchantStatus.model';

export interface CulturalMerchantCreate {
  /**
   * 所属租户ID
   */
  tenant_id: number | null;
  /**
   * 商家名称
   */
  name: string | null;
  /**
   * 法人姓名
   */
  legal_person?: any | null;
  /**
   * 营业执照编号
   */
  business_license_no?: any | null;
  /**
   * 联系电话
   */
  contact_phone?: any | null;
  /**
   * 联系邮箱
   */
  contact_email?: any | null;
  /**
   * 商家地址
   */
  address?: any | null;
  /**
   * 证明材料图片URL集合
   */
  proof_documents_json?: any | null;
  /**
   * 提成比例（%）
   */
  commission_rate?: number | null;
  /**
   * 默认时区
   */
  default_tz?: any | null;
  /**
   * 商家状态
   */
  status?: MerchantStatus | null;
  /**
   * 扩展 JSON
   */
  metadata_json?: any | null;
}