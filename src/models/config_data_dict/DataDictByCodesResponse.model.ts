import { DataDictSimpleItem } from './DataDictSimpleItem.model';

export interface DataDictByCodesResponse {
  /**
   * 分类编码
   */
  code: string | null;
  /**
   * 该分类下的数据字典项列表
   */
  items?: DataDictSimpleItem[] | null;
}