import { Coloring } from "@/components/Elements/Layouts/Coloring";
import { HStack, VStack } from "@/components/Elements/Layouts/Stack";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { Title } from "./Title";

interface Props {
  returnUrl?: string;
  hideReturn?: boolean;
}

const Card = styled.div`
  background-color: #fff;
  position: relative;
  top: -60px;
  border-radius: 16px;
  min-height: 200px;
  padding: 30px;
  width: 100%;
  @media screen and (min-width: 540px) {
    border: 1px;
    width: 540px;
  }
`;

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <Title {...props} />
      <Coloring backgroundColor="#97bfeb">
        <HStack justifyContent="center">
          <Card>
            <VStack spacing={4} alignItems="stretch">
              <Outlet />
            </VStack>
          </Card>
        </HStack>
      </Coloring>
    </>
  );
};

export default Layout;
