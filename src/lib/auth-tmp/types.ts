export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  role: "ADMIN" | "USER";
}

export interface UserResponse {
  jwt: string;
  user: AuthUser;
}

export interface User {
  id: string;
  name: string;
}

export interface Error {
  message: string;
}
