import { BackNavigaterButton } from "@/components/Models/Navigaters/BackNavigaterButton";
import styled from "styled-components";

const Heighter = styled.div`
  height: 30px;
`;

const Wrapper = styled.div`
  color: white;
  height: 160px;
  background-color: #0c5aba;
`;

const CenterizedTitle = styled.div`
  font-size: 26px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  returnUrl?: string;
  hideReturn?: boolean;
}

export const Title: React.FC<Props> = ({ returnUrl, hideReturn }) => {
  return (
    <Wrapper>
      <Heighter>
        {hideReturn ? <></> : <BackNavigaterButton returnUrl={returnUrl} />}
      </Heighter>
      <CenterizedTitle>AI 不動産査定</CenterizedTitle>
    </Wrapper>
  );
};
