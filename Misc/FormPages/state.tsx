import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// page1
export const nameState = atom({
  key: "name",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const ageState = atom({
  key: "age",
  default: 0,
});
export const genderState = atom({
  key: "gender",
  default: "",
});

// page2
export const yearState = atom({
  key: "year",
  default: "",
});
export const detailState = atom({
  key: "detail",
  default: 0,
});
