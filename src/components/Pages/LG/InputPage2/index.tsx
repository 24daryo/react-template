// state
import { UserText } from "@/components/Elements/Texts/UserText";
import { DisplaySelector } from "@/components/Models/DisplaySelector";
import { Apartment } from "./Apartment";
import { House } from "./House";
type Props = {
  next: string;
};

export const InputPage2: React.FC<Props> = ({ next }) => {
  return (
    <>
      <UserText>
        査定したい物件の種類を選択し、物件の情報を入力してください（2/3)
      </UserText>

      <DisplaySelector name="apartment">
        <Apartment next={next} />
      </DisplaySelector>

      <DisplaySelector name="house">
        <House next={next} />
      </DisplaySelector>
    </>
  );
};

export default InputPage2;
