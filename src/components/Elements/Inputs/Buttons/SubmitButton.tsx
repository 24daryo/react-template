import { Button } from "@mui/material";
import React from "react";

interface SubmitButtonProps {
  label: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  return (
    <Button
      type="submit"
      disableElevation
      variant="contained"
      fullWidth
      sx={{
        height: 56,
        fontSize: 15,
        fontWeight: "bold",
      }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <>{props.label}</>
    </Button>
  );
};
