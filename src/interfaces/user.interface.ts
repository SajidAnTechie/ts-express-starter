export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updateAt?: Date;
}
