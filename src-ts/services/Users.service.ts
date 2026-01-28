import { BaseService, ExtOptions } from './base.service';
import { UserCreate } from '../models/Users/UserCreate.model';
import { UserUpdate } from '../models/Users/UserUpdate.model';

class UsersService extends BaseService {
  constructor() {
    super();
  }

  /**
   * 获取用户列表
   * @param data any
   */
  getUserList(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/users`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * 创建新用户
   * @param data UserCreate
   */
  createUser(data: UserCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/users`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * 获取用户详情
   * @param userId string | number
   * @param data any
   */
  getUserById(userId: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/users/${userId}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * 更新用户信息
   * @param userId string | number
   * @param data UserUpdate
   */
  updateUser(userId: string | number, data: UserUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/users/${userId}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * 删除用户
   * @param userId string | number
   * @param data any
   */
  deleteUser(userId: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/users/${userId}`;
    return this.request<any>('delete', url, data, extOptions);
  }

}

export default new UsersService();