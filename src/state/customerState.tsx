import { atom } from "recoil";

export type UserConsideration =
  | "sale_now"
  | "sale_if_good"
  | "know_only_price"
  | "";
export interface Customer {
  email: string;
  name: string;
  phone: string;
  message: string;
  consideration: UserConsideration;
  confirm: boolean;
}
export const CustomerState = atom<Customer>({
  key: "buildingStructure",
  default: {
    email: "",
    name: "",
    phone: "",
    message: "",
    consideration: "",
    confirm: false,
  },
});
