import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface SubmitButtonProps {
  label: string;
  sx?: object | {};
  href: string;
}

const URLButton = styled.a`
  color: #ffffff;
  text-decoration: none;
`;

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  return (
    <Button disableElevation variant="contained" fullWidth sx={props.sx}>
      <URLButton href={props.href} target="_blank">
        {props.label}
      </URLButton>
    </Button>
  );
};
