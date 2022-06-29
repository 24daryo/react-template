import { atom } from "recoil";

export interface Realtor {
  required: {
    email: boolean;
    name: boolean;
    phone: boolean;
  };
}
export const RealtorState = atom<Realtor>({
  key: "realtorState",
  default: {
    required: {
      email: true,
      name: false,
      phone: true,
    },
  },
});
