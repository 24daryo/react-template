import { RequiredLabel } from "../Icons/RequiredLabel";
import { HStack } from "../Layouts/Stack";
import { UserText } from "./UserText";

type InputLabelProps = {
  label: string;
  required?: boolean;
};
export const InputLabel: React.FC<InputLabelProps> = ({ required, label }) => {
  return required ? (
    <HStack alignItems="center">
      <UserText>{label}</UserText>
      <RequiredLabel />
    </HStack>
  ) : (
    <UserText>{label}</UserText>
  );
};
