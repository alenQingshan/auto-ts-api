import { BaseService, ExtOptions } from './base.service';
import { CoreUserCreate } from '../models/CoreUserCreate.model';
import { CoreUserUpdate } from '../models/CoreUserUpdate.model';
import { ResponseSchema } from '../models/ResponseSchema.model';
import { UserStatusUpdate } from '../models/UserStatusUpdate.model';

class UsersService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get All Users
   * @param data any
   */
  getAllUsers(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/users`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create User
   * @param data CoreUserCreate
   */
  createUser(data: CoreUserCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/users`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get User By Id
   * @param user_id string | number
   * @param data any
   */
  getUserById(user_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/users/${user_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update User
   * @param user_id string | number
   * @param data CoreUserUpdate
   */
  updateUser(user_id: string | number, data: CoreUserUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/users/${user_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete User
   * @param user_id string | number
   * @param data any
   */
  deleteUser(user_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/users/${user_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Get User Available Roles
   * @param data any
   */
  getUserAvailableRoles(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/available-roles`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update User Status
   * @param user_id string | number
   * @param data UserStatusUpdate
   */
  updateUserStatus(user_id: string | number, data: UserStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/users/${user_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

}

export default new UsersService();