import Box from "@mui/material/Box";
import * as React from "react";

interface Props {
  children: React.ReactNode;
}

export const Centerize: React.FC<Props> = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        border: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // margin: "0 auto",
        // aspectRatio: "5/4",
      }}
    >
      {children}
    </Box>
  );
};

export const PropertyBox: React.FC<Props> = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        p: 4,
        width: 150,
        aspectRatio: "5/4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // aspectRatio: "5/4",
        borderRadius: 3,
        border: 1,
        backgroundColor: "#9adfff",
      }}
    >
      {children}
    </Box>
  );
};
