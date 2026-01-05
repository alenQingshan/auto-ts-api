import { CulturalProviderApprovalStatus } from '../cultural_products/CulturalProviderApprovalStatus.model';

export interface CulturalProviderApprovalRequest {
  /**
   * approval_status
   */
  approval_status: CulturalProviderApprovalStatus | null;
  /**
   * 驳回原因（驳回时必填）
   */
  rejection_reason?: any | null;
}