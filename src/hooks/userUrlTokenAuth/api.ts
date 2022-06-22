import axios from "axios";
import { ReceivedUserWrapper } from "./types";

export const loginWithToken = async (key: string): Promise<ReceivedUserWrapper> => {
  const URL = "https://inazuma-wlrf6y2g7q-an.a.run.app/is_valid_token";
  const x = await axios.post(URL, { token: key });
  return x.data;
};
