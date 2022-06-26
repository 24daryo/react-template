import { PropertyTypeNavigaterButton } from "@/components/Models/Navigaters";
import { HStack, VStack } from "../Elements/Layouts/Stack";
import { UserText } from "../Elements/Texts/UserText";

export const Home = () => {
  return (
    <>
      <VStack spacing={2} alignItems="stretch">
        <UserText>
          査定したい物件の種類を選択し、物件の情報を入力してください。
        </UserText>
        <HStack spacing={2} justifyContent="space-evenly">
          <PropertyTypeNavigaterButton propertyTypeName="apartment" />
          <PropertyTypeNavigaterButton propertyTypeName="house" />
          {/* <PropertyTypeNavigaterButton propertyTypeName="land" /> */}
        </HStack>
      </VStack>
    </>
  );
};
