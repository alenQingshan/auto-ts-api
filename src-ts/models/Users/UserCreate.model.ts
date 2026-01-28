export interface UserCreate {
  /**
   * username
   */
  username: string | null;
  /**
   * email
   */
  email: string | null;
  /**
   * password
   */
  password: string | null;
  /**
   * full_name
   */
  full_name?: string | null;
}