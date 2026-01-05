import { ValidationError } from '../common/ValidationError.model';

export interface HTTPValidationError {
  /**
   * detail
   */
  detail?: ValidationError[] | null;
}