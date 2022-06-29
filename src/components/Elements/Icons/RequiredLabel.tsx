import * as React from "react";
import styled from "styled-components";

const WarningLabel = styled.div`
  color: #ff0000;
  font-size: 10px;
`;

export const RequiredLabel: React.FC = () => {
  return <WarningLabel>必須</WarningLabel>;
};
