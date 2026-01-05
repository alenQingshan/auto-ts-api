export interface TenantDomainCreate {
  /**
   * 域名
   */
  domain: string | null;
  /**
   * 是否为主域名
   */
  is_primary?: boolean | null;
}