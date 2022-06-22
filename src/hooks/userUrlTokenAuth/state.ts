import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { AuthUser } from "./types";

const { persistAtom } = recoilPersist();

// user
export const userState = atom<AuthUser>({
  key: "user",
  default: {
    item: null,
    isvalid: false,
  },
  // リロードしても値を保持
  effects_UNSTABLE: [persistAtom],
});
