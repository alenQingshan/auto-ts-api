import { BaseService, ExtOptions } from './base.service';
import { LoginRequest } from '../models/login-request.model';
import { TokenResponse } from '../models/token-response.model';

class AuthService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Login
   * @param data LoginRequest
   */
  loginAuthLoginPost(data: LoginRequest, extOptions?: ExtOptions): Promise<TokenResponse> {
    const url = `/api/auth/login`;
    return this.request<TokenResponse>('post', url, data, extOptions);
  }

  /**
   * Register
   * @param data any
   */
  registerAuthRegisterPost(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/register`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Me
   * @param data any
   */
  meAuthMeGet(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/me`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Refresh
   * @param data any
   */
  refreshAuthRefreshGet(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/refresh`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new AuthService();