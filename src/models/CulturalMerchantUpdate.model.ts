export interface CulturalMerchantUpdate {
  /**
   * 所属租户ID
   */
  tenant_id?: any | null;
  /**
   * 商家名称
   */
  name?: any | null;
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
  commission_rate?: any | null;
  /**
   * 默认时区
   */
  default_tz?: any | null;
  /**
   * 商家状态
   */
  status?: any | null;
  /**
   * 扩展 JSON
   */
  metadata_json?: any | null;
}