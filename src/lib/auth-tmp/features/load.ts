import storage from "@/utils/storage";
import axios from "axios";
import { AuthUser } from "../types";

const getUser = (): Promise<AuthUser> => {
  return axios.get("/auth/me");
};

export async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}
