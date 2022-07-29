export interface Staff {
  id?: number;
  fname: string;
  mname: string;
  lname: string;
  gender: string;
  phone: string;
  email: string;
  role: string;
}

export interface Role {
  id?: number;
  roleName: string;
  description: string;
}
