import * as React from "react";
import styled from "styled-components";
import { ApartmentIcon, HouseIcon } from "../Icons/PropertyIcons";
import { VStack } from "../Layouts/Stack";

const Label = styled.div<{ isSelected: boolean }>`
  margin-top: 8px;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
`;

const Card = styled.div<{ isSelected: boolean }>`
  padding: 20px;
  width: 150px;
  aspect-ratio: 5/4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  /* border: 5px;
  border-color: "#8e2f2f"; */
  background-color: ${(props) => (props.isSelected ? "#127dc0" : "#e4e4e4")};
`;

interface PropertyProps {
  isSelected: boolean;
}

export const ApartmentCard: React.FC<PropertyProps> = ({ isSelected }) => {
  return (
    <Card isSelected={isSelected}>
      <VStack alignItems="center">
        <ApartmentIcon />
        <Label isSelected={isSelected}>マンション</Label>
      </VStack>
    </Card>
  );
};

export const HouseCard: React.FC<PropertyProps> = ({ isSelected }) => {
  return (
    <Card isSelected={isSelected}>
      <VStack alignItems="center">
        <HouseIcon />
        <Label isSelected={isSelected}>一戸建て</Label>
      </VStack>
    </Card>
  );
};

export const LandCard: React.FC<PropertyProps> = ({ isSelected }) => {
  return (
    <Card isSelected={isSelected}>
      <VStack alignItems="center">
        <HouseIcon />
        <Label isSelected={isSelected}>土地</Label>
      </VStack>
    </Card>
  );
};
