import { InputLabel } from "@/components/Elements/Texts/InputLabel";
import { SubmitHandler, useForm } from "react-hook-form";
// state
import { TextFieldForm } from "@/components/Elements/Forms/TextFieldForm";
import { HStack } from "@/components/Elements/Layouts/Stack";
import { UserText } from "@/components/Elements/Texts/UserText";
import { PropertyNameForm } from "@/components/Models/Forms/PropertyNameForm";
import {
  NextNavigaterButton,
  PropertyTypeNavigaterButton,
} from "@/components/Models/Navigaters";
import {
  locationAreaState,
  locationDetailState,
  postCodeState,
  propertyNameState,
} from "@/state/propertyState";
import { useRecoilState } from "recoil";

type FormInput = {
  propertyName: string;
  postCode: string;
  locationArea: string;
  locationDetail: string;
};

// バリデーションルール
// const schema = yup.object({
//   postCode: yup
//     .string()
//     .required("必須です")
//     .matches(
//       /^[0-9]{7}$/,
//       "郵便番号は半角数字7桁・ハイフンなしで入力してください"
//     ),
//   locationArea: yup.string().required("必須です"),
//   locationDetail: yup.string().required("必須です"),
// });

export const InputPage1: React.FC<{ next: string }> = ({ next }) => {
  // global state
  const [propertyName, setPropertyName] = useRecoilState(propertyNameState);
  const [postCode, setPostCode] = useRecoilState(postCodeState);
  const [locationArea, setLocationArea] = useRecoilState(locationAreaState);
  const [locationDetail, setLocationDetail] =
    useRecoilState(locationDetailState);

  // react-hook-form
  const form = useForm<FormInput>({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      propertyName: propertyName,
      postCode: postCode,
      locationArea: locationArea,
      locationDetail: locationDetail,
    },
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = form;

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    setPropertyName(data.propertyName);
    setLocationArea(data.locationArea);
    setLocationDetail(data.locationDetail);
    setPostCode(data.postCode);
  };

  // urlのパスを取得
  return (
    <>
      <UserText>
        査定したい物件の種類を選択し、物件の情報を入力してください（1/3)
      </UserText>

      <HStack spacing={2} justifyContent="space-evenly">
        <PropertyTypeNavigaterButton propertyTypeName="apartment" />
        <PropertyTypeNavigaterButton propertyTypeName="house" />
      </HStack>

      <PropertyNameForm form={form} />

      <div>
        <InputLabel required label="郵便番号" />
        <TextFieldForm
          form={form}
          name="postCode"
          type="number"
          placeholder="0000000"
          rules={true ? { required: "値を入力してください" } : {}}
        />
      </div>

      <div>
        <InputLabel required label="都道府県・市区群・町名" />
        <TextFieldForm
          form={form}
          name="locationArea"
          placeholder="東京都中央区日本橋"
        />
      </div>

      <div>
        <InputLabel required label="丁目以降" />
        <TextFieldForm form={form} name="locationDetail" placeholder="1-1-1" />
      </div>

      <NextNavigaterButton
        label="次へ"
        isValid={isValid}
        next={next}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};
