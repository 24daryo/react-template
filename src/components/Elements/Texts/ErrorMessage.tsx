import { Typography } from "@mui/material";
import React from "react";

type ErrorMessageProps = {
  message: string | undefined;
};
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return message ? (
    <Typography
      sx={{
        fontSize: 10,
        marginTop: "3px",
        color: "#ff0000",
      }}
    >
      {message}
    </Typography>
  ) : (
    <></>
  );
};
