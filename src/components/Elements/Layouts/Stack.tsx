import Stack from "@mui/material/Stack";
import * as React from "react";

interface StackProps {
  children: React.ReactNode;
  spacing?: number;
}

export const HStack: React.FC<StackProps> = ({ children, spacing }) => {
  return (
    <Stack direction="row" spacing={spacing ? spacing : 0}>
      {children}
    </Stack>
  );
};

export const VStack: React.FC<StackProps> = ({ children, spacing }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      // alignItems="center"
      spacing={spacing ? spacing : 0}
    >
      {children}
    </Stack>
  );
};
