import storage from "@/utils/storage";

export async function logoutFn() {
  storage.clearToken();
}
