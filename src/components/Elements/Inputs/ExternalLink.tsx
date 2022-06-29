import styled from "styled-components";

const StyledA = styled.a`
  display: inline-block;
  background: transparent;
  color: #206dcb;
  border: 2px solid white;
  text-decoration: underline;
`;

interface Props {
  children: React.ReactNode;
  href: string;
}

export const ExternalLink: React.FC<Props> = ({ href, children }) => {
  return (
    <StyledA href={href} target="_blank">
      {children}
    </StyledA>
  );
};
