export interface User {
  id?: number | string;
  phone: string;
  username: string;
  password: string;
  role: string;
  action: string;
  isEnabled: boolean;
}
