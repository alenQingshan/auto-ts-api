import { BaseService, ExtOptions } from './base.service';
import { CoreUserCreate } from '../models/users/CoreUserCreate.model';
import { CoreUserUpdate } from '../models/users/CoreUserUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { UserStatusUpdate } from '../models/users/UserStatusUpdate.model';
import { AdminResetPasswordRequest } from '../models/users/AdminResetPasswordRequest.model';
import { ChangePasswordRequest } from '../models/users/ChangePasswordRequest.model';
import { SetSecurityQuestionsRequest } from '../models/users/SetSecurityQuestionsRequest.model';
import { app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____2 } from '../models/auth/app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____2.model';

class UsersService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Get All Users
   * @param data any
   */
  getAllUsers(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/users`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create User
   * @param data CoreUserCreate
   */
  createUser(data: CoreUserCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/users`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get User By Id
   * @param user_id string | number
   * @param data any
   */
  getUserById(user_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/users/${user_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update User
   * @param user_id string | number
   * @param data CoreUserUpdate
   */
  updateUser(user_id: string | number, data: CoreUserUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/users/${user_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete User
   * @param user_id string | number
   * @param data any
   */
  deleteUser(user_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/core/users/${user_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update User Status
   * @param user_id string | number
   * @param data UserStatusUpdate
   */
  updateUserStatus(user_id: string | number, data: UserStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/users/${user_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Admin Reset Password
   * @param user_id string | number
   * @param data AdminResetPasswordRequest
   */
  adminResetPassword(user_id: string | number, data: AdminResetPasswordRequest, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/core/users/${user_id}/reset-password`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

  /**
   * Change User Password
   * @param user_id string | number
   * @param data ChangePasswordRequest
   */
  changeUserPassword(user_id: string | number, data: ChangePasswordRequest, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/core/users/${user_id}/change-password`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

  /**
   * Set Security Questions
   * @param user_id string | number
   * @param data SetSecurityQuestionsRequest
   */
  setSecurityQuestions(user_id: string | number, data: SetSecurityQuestionsRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/core/users/${user_id}/security-questions`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get User Questions
   * @param user_id string | number
   * @param data any
   */
  getUserQuestions(user_id: string | number, data: any, extOptions?: ExtOptions): Promise<app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____2> {
    const url = `/api/core/users/${user_id}/security-questions`;
    return this.request<app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____2>('get', url, data, extOptions);
  }

}

export default new UsersService();