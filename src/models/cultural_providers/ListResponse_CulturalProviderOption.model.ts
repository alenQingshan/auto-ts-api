import { CulturalProviderOption } from '../cultural_products/CulturalProviderOption.model';

export interface ListResponse_CulturalProviderOption {
  /**
   * data
   */
  data: CulturalProviderOption[] | null;
  /**
   * count
   */
  count: number | null;
}