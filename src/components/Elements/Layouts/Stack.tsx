import Stack from "@mui/material/Stack";
import * as React from "react";
import styled from "styled-components";

interface StackProps {
  children: React.ReactNode;
  spacing?: number;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  testing?: boolean;
}

export const HStack: React.FC<StackProps> = ({
  children,
  spacing,
  alignItems,
  justifyContent,
  testing,
}) => {
  return (
    <Stack
      direction="row"
      spacing={spacing ? spacing : 0}
      alignItems={alignItems ? alignItems : "flex-start"}
      justifyContent={justifyContent ? justifyContent : "flex-start"}
      border={testing ? "2px solid #f00" : "none"}
    >
      {children}
    </Stack>
  );
};

export const HStackStyler = styled.div`
  width: 100%;
`;

export const VStack: React.FC<StackProps> = ({
  children,
  spacing,
  alignItems,
  justifyContent,
  testing,
}) => {
  return (
    <Stack
      direction="column"
      alignItems={alignItems ? alignItems : "flex-start"}
      justifyContent={justifyContent ? justifyContent : "flex-start"}
      spacing={spacing ? spacing : 0}
      border={testing ? "2px solid #f00" : "none"}
      // width={fullWidth ? "100%" : "default"}
      // minWidth="100%"
    >
      {children}
    </Stack>
  );
};
