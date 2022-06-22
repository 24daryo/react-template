export interface AuthUser {
  isvalid: boolean;
  item: ReceivedUser | null;
}

export interface ReceivedUser {
  lead_privacy_policy: string;
  lead_access_link: string;
  lead_logo_type: string;
  lead_logo_image: string;
  lead_logo_text: string;
}

export interface ReceivedUserWrapper {
  message: string | null;
  results: ReceivedUser | null;
  status: "OK" | "Error";
}
