import { ValidationError } from './ValidationError.model';

export interface HTTPValidationError {
  /**
   * detail
   */
  detail?: ValidationError[] | null;
}