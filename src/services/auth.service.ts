import { BaseService, ExtOptions } from './base.service';
import { LoginRequest } from '../models/auth/LoginRequest.model';
import { RegisterRequest } from '../models/auth/RegisterRequest.model';
import { RefreshRequest } from '../models/auth/RefreshRequest.model';
import { ResetPasswordRequest } from '../models/auth/ResetPasswordRequest.model';
import { SwitchIdentityRequest } from '../models/auth/SwitchIdentityRequest.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { EmailRegisterRequest } from '../models/auth/EmailRegisterRequest.model';
import { EmailLoginRequest } from '../models/auth/EmailLoginRequest.model';
import { PhoneRegisterRequest } from '../models/auth/PhoneRegisterRequest.model';
import { PhoneLoginRequest } from '../models/auth/PhoneLoginRequest.model';
import { GoogleLoginRequest } from '../models/auth/GoogleLoginRequest.model';
import { SendVerificationCodeRequest } from '../models/auth/SendVerificationCodeRequest.model';
import { app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____1 } from '../models/auth/app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____1.model';
import { app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____2 } from '../models/auth/app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____2.model';
import { ResetPasswordBySecurityQuestionsRequest } from '../models/auth/ResetPasswordBySecurityQuestionsRequest.model';

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
   * Refresh
   * @param data RefreshRequest
   */
  refresh(data: RefreshRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/refresh`;
    return this.request<any>('post', url, data, extOptions);
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

  /**
   * Check Token
   * @param data any
   */
  checkToken(data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/auth/check`;
    return this.request<ResponseSchema>('get', url, data, extOptions);
  }

  /**
   * Register With Email
   * @param data EmailRegisterRequest
   */
  registerWithEmail(data: EmailRegisterRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/email/register`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Login With Email
   * @param data EmailLoginRequest
   */
  loginWithEmail(data: EmailLoginRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/email/login`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Register With Phone
   * @param data PhoneRegisterRequest
   */
  registerWithPhone(data: PhoneRegisterRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/phone/register`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Login With Phone
   * @param data PhoneLoginRequest
   */
  loginWithPhone(data: PhoneLoginRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/phone/login`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Google Login
   * @param data GoogleLoginRequest
   */
  googleLogin(data: GoogleLoginRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/google/login`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Send Verification Code
   * @param data SendVerificationCodeRequest
   */
  sendVerificationCode(data: SendVerificationCodeRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/send-verification-code`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get System Security Questions
   * @param data any
   */
  getSystemSecurityQuestions(data: any, extOptions?: ExtOptions): Promise<app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____1> {
    const url = `/api/auth/system-security-questions`;
    return this.request<app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____1>('get', url, data, extOptions);
  }

  /**
   * User Security Questions
   * @param data any
   */
  userSecurityQuestions(data: any, extOptions?: ExtOptions): Promise<app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____2> {
    const url = `/api/auth/user-security-questions`;
    return this.request<app__backend__schemas__base_schema__ResponseSchema_List_SecurityQuestionRead____2>('get', url, data, extOptions);
  }

  /**
   * Reset Password By Security Questions
   * @param data ResetPasswordBySecurityQuestionsRequest
   */
  resetPasswordBySecurityQuestions(data: ResetPasswordBySecurityQuestionsRequest, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/auth/reset-password-by-security-questions`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * Get Fe Token
   * @param data any
   */
  getFeToken(data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/auth/fe-token`;
    return this.request<ResponseSchema>('get', url, data, extOptions);
  }

}

export default new AuthService();