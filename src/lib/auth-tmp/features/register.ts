import storage from "@/utils/storage";
import axios from "axios";
import { UserResponse } from "../types";

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const loginWithEmailAndPassword = (data: RegisterCredentialsDTO): Promise<UserResponse> => {
  return axios.post("/auth/register", data);
};

export async function registerFn(data: RegisterCredentialsDTO) {
  const response: UserResponse = await loginWithEmailAndPassword(data);
  const { jwt, user } = response;
  storage.setToken(jwt);
  return user;
}
