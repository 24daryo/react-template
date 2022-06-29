import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReturnButtonIcon } from "../../Elements/Icons/ReturnButtonIcon";

interface ReturnProps {
  returnUrl?: string;
}

export const BackNavigaterButton: React.FC<ReturnProps> = (prop) => {
  const navigate = useNavigate();
  const handleBack = React.useCallback(() => {
    if (prop.returnUrl) {
      navigate(prop.returnUrl);
    } else {
      navigate(-1);
    }
  }, [navigate, prop.returnUrl]);

  return (
    <Button
      variant="outlined"
      startIcon={<ReturnButtonIcon />}
      sx={{
        color: "#ffffff",
        borderColor: "transparent",
      }}
      onClick={handleBack}
    >
      back
    </Button>
  );
};
