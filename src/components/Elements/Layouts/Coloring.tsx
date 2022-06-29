import styled from "styled-components";

export const Coloring = styled.div<{
  color?: string;
  backgroundColor?: string;
}>`
  color: ${(props) => (props.color ? props.color : "")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
`;
