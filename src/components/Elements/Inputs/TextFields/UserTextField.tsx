import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import React from "react";

export const UserTextField: React.FC<TextFieldProps> = (field) => {
  return <MuiTextField {...field} />;
};
