import React from "react";
import styled from "styled-components";

const StyledTypography = styled.div`
  /* margin-top: 0;
  margin-bottom: 0; */
  /* line-height: 30px; */
  font-size: 26px;
  color: white;
  height: 100px;
  text-align: center;
  background-color: #0c5aba;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Title() {
  return <StyledTypography>AI 不動産査定</StyledTypography>;
}
