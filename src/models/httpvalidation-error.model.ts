import { ValidationError } from './validation-error.model';

export interface HTTPValidationError {
  /**
   * detail
   */
  detail?: ValidationError[] | null;
}