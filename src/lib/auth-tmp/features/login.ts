import storage from "@/utils/storage";
import axios from "axios";
import { UserResponse } from "../types";

export interface LoginCredentialsDTO {
  email: string;
  password: string;
}

const loginWithEmailAndPassword = (data: LoginCredentialsDTO): Promise<UserResponse> => {
  return axios.post("/auth/login", data);
};

export async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const { jwt, user } = response;
  storage.setToken(jwt);
  return user;
}
