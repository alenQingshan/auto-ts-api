import { BaseService, ExtOptions } from './base.service';
import { ProductCreate } from '../models/Products/ProductCreate.model';
import { ProductUpdate } from '../models/Products/ProductUpdate.model';

class ProductsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * 获取产品列表
   * @param data any
   */
  getProductList(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/products`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * 创建新产品
   * @param data ProductCreate
   */
  createProduct(data: ProductCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/products`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * 更新产品信息
   * @param productId string | number
   * @param data ProductUpdate
   */
  updateProduct(productId: string | number, data: ProductUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/products/${productId}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * 删除产品
   * @param productId string | number
   * @param data any
   */
  deleteProduct(productId: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/products/${productId}`;
    return this.request<any>('delete', url, data, extOptions);
  }

}

export default new ProductsService();