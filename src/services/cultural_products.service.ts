import { BaseService, ExtOptions } from './base.service';
import { CulturalProductCreate } from '../models/cultural_products/CulturalProductCreate.model';
import { CulturalProductUpdate } from '../models/cultural_products/CulturalProductUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { CulturalProductStatusUpdate } from '../models/cultural_products/CulturalProductStatusUpdate.model';
import { CulturalProductBatchStatusUpdate } from '../models/cultural_products/CulturalProductBatchStatusUpdate.model';
import { CulturalProductSpecsUpdate } from '../models/cultural_products/CulturalProductSpecsUpdate.model';
import { CulturalProductSkusUpdate } from '../models/cultural_products/CulturalProductSkusUpdate.model';
import { CulturalProductCategoriesUpdate } from '../models/cultural_products/CulturalProductCategoriesUpdate.model';
import { CulturalProductTagsUpdate } from '../models/cultural_products/CulturalProductTagsUpdate.model';
import { CulturalProductMediaUpdate } from '../models/cultural_products/CulturalProductMediaUpdate.model';

class CulturalProductsService extends BaseService {
  constructor() {
    super();
  }

  /**
   * List Products
   * @param data any
   */
  listProducts(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/products`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Product
   * @param data CulturalProductCreate
   */
  createProduct(data: CulturalProductCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/products`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Product By Id
   * @param product_id string | number
   * @param data any
   */
  getProductById(product_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/products/${product_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Product
   * @param product_id string | number
   * @param data CulturalProductUpdate
   */
  updateProduct(product_id: string | number, data: CulturalProductUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/products/${product_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Product
   * @param product_id string | number
   * @param data any
   */
  deleteProduct(product_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/products/${product_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Product Status
   * @param product_id string | number
   * @param data CulturalProductStatusUpdate
   */
  updateProductStatus(product_id: string | number, data: CulturalProductStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/products/${product_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Batch Update Product Status
   * @param data CulturalProductBatchStatusUpdate
   */
  batchUpdateProductStatus(data: CulturalProductBatchStatusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/products/batch-status`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

  /**
   * Get Product Specs
   * @param product_id string | number
   * @param data any
   */
  getProductSpecs(product_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/products/${product_id}/specs`;
    return this.request<ResponseSchema>('get', url, data, extOptions);
  }

  /**
   * Create Product Specs
   * @param product_id string | number
   * @param data CulturalProductSpecsUpdate
   */
  createProductSpecs(product_id: string | number, data: CulturalProductSpecsUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/products/${product_id}/specs`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

  /**
   * Update Product Specs
   * @param product_id string | number
   * @param data CulturalProductSpecsUpdate
   */
  updateProductSpecs(product_id: string | number, data: CulturalProductSpecsUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/products/${product_id}/specs`;
    return this.request<ResponseSchema>('put', url, data, extOptions);
  }

  /**
   * Update Product Skus
   * @param product_id string | number
   * @param data CulturalProductSkusUpdate
   */
  updateProductSkus(product_id: string | number, data: CulturalProductSkusUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/products/${product_id}/skus`;
    return this.request<ResponseSchema>('put', url, data, extOptions);
  }

  /**
   * Update Product Categories
   * @param product_id string | number
   * @param data CulturalProductCategoriesUpdate
   */
  updateProductCategories(product_id: string | number, data: CulturalProductCategoriesUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/products/${product_id}/categories`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

  /**
   * Remove Product Category
   * @param product_id string | number
   * @param category_id string | number
   * @param data any
   */
  removeProductCategory(product_id: string | number, category_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/products/${product_id}/categories/${category_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Product Tags
   * @param product_id string | number
   * @param data CulturalProductTagsUpdate
   */
  updateProductTags(product_id: string | number, data: CulturalProductTagsUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/products/${product_id}/tags`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

  /**
   * Remove Product Tag
   * @param product_id string | number
   * @param tag_id string | number
   * @param data any
   */
  removeProductTag(product_id: string | number, tag_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/products/${product_id}/tags/${tag_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Product Media
   * @param product_id string | number
   * @param data CulturalProductMediaUpdate
   */
  updateProductMedia(product_id: string | number, data: CulturalProductMediaUpdate, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/products/${product_id}/media`;
    return this.request<ResponseSchema>('patch', url, data, extOptions);
  }

}

export default new CulturalProductsService();