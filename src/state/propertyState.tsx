import { atom } from "recoil";

// const { persistAtom } = recoilPersist();

// page1
// // URLで状態を管理するためrecoilでは不要
// export const propertyTypeState = atom<"apartment" | "house" | undefined>({
//   key: "propertyType",
//   default: undefined,
//   // effects_UNSTABLE: [persistAtom],
// });
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
export const buildingYearState = atom<number | null>({
  key: "buildingYear",
  default: null,
});
export type BuildingStructure =
  | "wood"
  | "light_weight_steel"
  | "reinforced_concrete"
  | "";
export const buildingStructureState = atom<BuildingStructure>({
  key: "buildingStructure",
  default: "",
});
export const livingAreaState = atom<number | null>({
  key: "livingArea",
  default: null,
});
export const landAreaState = atom<number | null>({
  key: "landArea",
  default: null,
});
export type LayoutType =
  | "未選択"
  | "ワンルーム"
  | "1K"
  | "1DK/LDK"
  | "2K/DK/LDK"
  | "3K/DK/LDK"
  | "4K/DK/LDK"
  | "5K以上";
export const layoutTypeState = atom<LayoutType>({
  key: "layoutType",
  default: "未選択",
});
export const locatedFloorState = atom<number | null>({
  key: "locatedFloor",
  default: null,
});
export const totalFloorState = atom<number | null>({
  key: "totalFloor",
  default: null,
});
