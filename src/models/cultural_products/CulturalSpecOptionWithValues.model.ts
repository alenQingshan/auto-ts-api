import { CulturalSpecValueOption } from './CulturalSpecValueOption.model';

export interface CulturalSpecOptionWithValues {
  /**
   * 规格ID
   */
  spec_id: number | null;
  /**
   * 规格名称
   */
  name: string | null;
  /**
   * 规格值选项列表
   */
  values?: CulturalSpecValueOption[] | null;
}