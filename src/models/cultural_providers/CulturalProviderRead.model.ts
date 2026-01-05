import { CulturalProviderCreatedFrom } from '../cultural_products/CulturalProviderCreatedFrom.model';
import { CulturalProviderApprovalStatus } from '../cultural_products/CulturalProviderApprovalStatus.model';
import { BaseStatus } from '../sms_templates/BaseStatus.model';

export interface CulturalProviderRead {
  /**
   * 供应商名称（显示名称）
   */
  name: string | null;
  /**
   * 供应商编码（租户内唯一）
   */
  code: string | null;
  /**
   * 供应商简称
   */
  short_name?: any | null;
  /**
   * 公司全称
   */
  company_full_name?: any | null;
  /**
   * 统一社会信用代码
   */
  social_credit_code?: any | null;
  /**
   * 公司介绍（富文本）
   */
  company_intro_html?: any | null;
  /**
   * 公司Logo
   */
  company_logo_url?: any | null;
  /**
   * 是否支持常温配送
   */
  support_ambient_shipping?: boolean | null;
  /**
   * 是否支持冷藏配送
   */
  support_chilled_shipping?: boolean | null;
  /**
   * 是否支持冷冻配送
   */
  support_frozen_shipping?: boolean | null;
  /**
   * 默认运费
   */
  default_shipping_fee?: string | null;
  /**
   * 免运费门槛金额
   */
  free_shipping_threshold?: any | null;
  /**
   * 银行名称
   */
  bank_name?: any | null;
  /**
   * 银行账号
   */
  bank_account_no?: any | null;
  /**
   * 入驻时间
   */
  settled_at?: any | null;
  /**
   * 合作开始日期
   */
  cooperation_start_date?: any | null;
  /**
   * 合作结束日期
   */
  cooperation_end_date?: any | null;
  /**
   * 联系人
   */
  contact_name?: any | null;
  /**
   * 联系电话
   */
  contact_phone?: any | null;
  /**
   * 联系邮箱
   */
  contact_email?: any | null;
  /**
   * 地址
   */
  address?: any | null;
  /**
   * 区域编码，如 CN-TW-KHH
   */
  region?: any | null;
  /**
   * 店铺Banner（前台展示）
   */
  store_banner_url?: any | null;
  /**
   * 店铺公告（前台展示）
   */
  store_notice?: any | null;
  /**
   * 扩展JSON
   */
  metadata_json?: any | null;
  /**
   * 供应商ID
   */
  provider_id: number | null;
  /**
   * 所属租户ID
   */
  tenant_id: number | null;
  /**
   * created_from
   */
  created_from: CulturalProviderCreatedFrom | null;
  /**
   * approval_status
   */
  approval_status: CulturalProviderApprovalStatus | null;
  /**
   * 审核人ID
   */
  approval_by?: any | null;
  /**
   * 审核时间
   */
  approval_at?: any | null;
  /**
   * 驳回原因
   */
  rejection_reason?: any | null;
  /**
   * 运营状态
   */
  status: BaseStatus | null;
  /**
   * 创建人ID
   */
  created_by?: any | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
  /**
   * 软删除标记
   */
  is_deleted: boolean | null;
}