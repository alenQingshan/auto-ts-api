import { BaseService, ExtOptions } from './base.service';
import { DataDictCategoryCreate } from '../models/config_data_dict/DataDictCategoryCreate.model';
import { DataDictUpdate } from '../models/config_data_dict/DataDictUpdate.model';
import { DataDictItemCreate } from '../models/config_data_dict/DataDictItemCreate.model';
import { DataDictByCodesRequest } from '../models/config_data_dict/DataDictByCodesRequest.model';

class ConfigDataDictService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Dict Categories
   * @param data any
   */
  getDictCategories(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/categories`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Dict Category
   * @param data DataDictCategoryCreate
   */
  createDictCategory(data: DataDictCategoryCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/categories`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Dict Category
   * @param category_id string | number
   * @param data any
   */
  getDictCategory(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/categories/${category_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Dict Category
   * @param category_id string | number
   * @param data DataDictUpdate
   */
  updateDictCategory(category_id: string | number, data: DataDictUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/categories/${category_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Dict Category
   * @param category_id string | number
   * @param data any
   */
  deleteDictCategory(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/categories/${category_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * Get Dict Items
   * @param category_id string | number
   * @param data any
   */
  getDictItems(category_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/categories/${category_id}/items`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Dict Item
   * @param category_id string | number
   * @param data DataDictItemCreate
   */
  createDictItem(category_id: string | number, data: DataDictItemCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/categories/${category_id}/items`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Dict Item
   * @param item_id string | number
   * @param data any
   */
  getDictItem(item_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/items/${item_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Dict Item
   * @param item_id string | number
   * @param data DataDictUpdate
   */
  updateDictItem(item_id: string | number, data: DataDictUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/items/${item_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Dict Item
   * @param item_id string | number
   * @param data any
   */
  deleteDictItem(item_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/items/${item_id}`;
    return this.request<any>('delete', url, data, extOptions);
  }

  /**
   * 根据分类code获取简化格式的子项列表
   * @param category_code string | number
   * @param data any
   */
  getSimpleItemsByCategoryCode(category_code: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/by-code/${category_code}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * 根据分类code列表批量获取简化格式的子项列表
   * @param data DataDictByCodesRequest
   */
  getSimpleItemsByCategoryCodes(data: DataDictByCodesRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/conf/data-dict/by-code`;
    return this.request<any>('post', url, data, extOptions);
  }

}

export default new ConfigDataDictService();