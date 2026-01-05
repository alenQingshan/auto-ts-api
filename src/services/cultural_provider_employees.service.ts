import { BaseService, ExtOptions } from './base.service';
import { CulturalProviderEmployeeCreate } from '../models/cultural_provider_employees/CulturalProviderEmployeeCreate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { CulturalProviderEmployeeUpdate } from '../models/cultural_provider_employees/CulturalProviderEmployeeUpdate.model';

class CulturalProviderEmployeesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get Provider Employees
   * @param provider_id string | number
   * @param data any
   */
  getProviderEmployees(provider_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers/${provider_id}/employees`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Add User To Provider
   * @param provider_id string | number
   * @param data CulturalProviderEmployeeCreate
   */
  addUserToProvider(provider_id: string | number, data: CulturalProviderEmployeeCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers/${provider_id}/employees`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Remove User From Provider
   * @param provider_id string | number
   * @param user_id string | number
   * @param data any
   */
  removeUserFromProvider(provider_id: string | number, user_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/cultural/providers/${provider_id}/employees/${user_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Provider Employee
   * @param employee_id string | number
   * @param data CulturalProviderEmployeeUpdate
   */
  updateProviderEmployee(employee_id: string | number, data: CulturalProviderEmployeeUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/provider-employees/${employee_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Get Available Users For Provider
   * @param provider_id string | number
   * @param data any
   */
  getAvailableUsersForProvider(provider_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/cultural/providers/${provider_id}/available-users`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new CulturalProviderEmployeesService();