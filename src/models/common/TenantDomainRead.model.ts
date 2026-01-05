export interface TenantDomainRead {
  /**
   * 域名ID
   */
  domain_id: number | null;
  /**
   * 域名
   */
  domain: string | null;
  /**
   * 是否为主域名
   */
  is_primary: boolean | null;
  /**
   * 创建时间
   */
  created_at: string | null;
  /**
   * 更新时间
   */
  updated_at: string | null;
}