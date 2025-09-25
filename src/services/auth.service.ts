import { BaseService, ExtOptions } from './base.service';
import { LoginRequest } from '../models/LoginRequest.model';
import { RegisterRequest } from '../models/RegisterRequest.model';
import { RefreshRequest } from '../models/RefreshRequest.model';
import { ChangePasswordRequest } from '../models/ChangePasswordRequest.model';
import { ResponseSchema } from '../models/ResponseSchema.model';
import { ForgotPasswordRequest } from '../models/ForgotPasswordRequest.model';
import { ResetPasswordRequest } from '../models/ResetPasswordRequest.model';
import { SwitchIdentityRequest } from '../models/SwitchIdentityRequest.model';

class AuthService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Login
   * @param data LoginRequest
   */
  login(data: LoginRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/login`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Register
   * @param data RegisterRequest
   */
  register(data: RegisterRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/register`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Me
   * @param data any
   */
  me(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/me`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Refresh
   * @param data RefreshRequest
   */
  refresh(data: RefreshRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/refresh`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Change Password
   * @param data ChangePasswordRequest
   */
  changePassword(data: ChangePasswordRequest, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/auth/change-password`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

  /**
   * Forgot Password
   * @param data ForgotPasswordRequest
   */
  forgotPassword(data: ForgotPasswordRequest, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/auth/forgot-password`;
    return this.request<ResponseSchema>('post', url, data, extOptions);
  }

  /**
   * Reset Password
   * @param data ResetPasswordRequest
   */
  resetPassword(data: ResetPasswordRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/reset-password`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Switch Identity
   * @param data SwitchIdentityRequest
   */
  switchIdentity(data: SwitchIdentityRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/switch`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Switchable Identities
   * @param data any
   */
  getSwitchableIdentities(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/identities`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new AuthService();