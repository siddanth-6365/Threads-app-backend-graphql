export interface UserPayload {
  email: string;
  password: string;
}

export interface CreateUserPayload {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}
