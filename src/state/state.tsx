import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// page1
export const propertyTypeState = atom<"apartment" | "house">({
  key: "propertyType",
  default: "apartment",
  // effects_UNSTABLE: [persistAtom],
});
export const propertyNameState = atom({
  key: "propertyName",
  default: "",
});
export const postCodeState = atom({
  key: "postCode",
  default: "",
});
export const locationAreaState = atom({
  key: "locationArea",
  default: "",
});
export const locationDetailState = atom({
  key: "locationDetail",
  default: "",
});

// page2
export const totalFloorState = atom<number | null>({
  key: "totalFloor",
  default: null,
});
