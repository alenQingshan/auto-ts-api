import { BaseService, ExtOptions } from './base.service';
import { CulturalMerchantCreate } from '../models/CulturalMerchantCreate.model';
import { CulturalMerchantUpdate } from '../models/CulturalMerchantUpdate.model';
import { ResponseSchema } from '../models/ResponseSchema.model';
import { MerchantStatusUpdate } from '../models/MerchantStatusUpdate.model';

class CulturalMerchantsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get All Merchants
   * @param data any
   */
  getAllMerchants(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/merchants`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Merchant
   * @param data CulturalMerchantCreate
   */
  createMerchant(data: CulturalMerchantCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/merchants`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Merchant By Id
   * @param merchant_id string | number
   * @param data any
   */
  getMerchantById(merchant_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/merchants/${merchant_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Merchant
   * @param merchant_id string | number
   * @param data CulturalMerchantUpdate
   */
  updateMerchant(merchant_id: string | number, data: CulturalMerchantUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/merchants/${merchant_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Merchant
   * @param merchant_id string | number
   * @param data any
   */
  deleteMerchant(merchant_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/merchants/${merchant_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Merchant Status
   * @param merchant_id string | number
   * @param data MerchantStatusUpdate
   */
  updateMerchantStatus(merchant_id: string | number, data: MerchantStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/merchants/${merchant_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new CulturalMerchantsService();