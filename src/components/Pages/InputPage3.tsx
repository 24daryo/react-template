import { InputLabel } from "@/components/Elements/Texts/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
// state
import { CheckBoxForm } from "@/components/Models/Forms/CheckBoxForm";
import { NextNavigaterButton } from "@/components/Models/Navigaters";
import { useRecoilState } from "recoil";
import * as yup from "yup";
import {
  locationAreaState,
  locationDetailState,
  postCodeState,
  propertyNameState,
} from "../../state/propertyState";
import { ExternalLink } from "../Elements/Inputs/ExternalLink";
import { TextForm } from "../Elements/Inputs/TextFields/UserTextField";
import { HStack } from "../Elements/Layouts/Stack";
import { NotifyText } from "../Elements/Texts/NotifyText";
import { UserText } from "../Elements/Texts/UserText";
import { StringGroup } from "../Models/Forms/StringGroup";
type FormInput = {
  propertyName: string;
  postCode: string;
  locationArea: string;
  locationDetail: string;
};

// バリデーションルール
const schema = yup.object({
  email: yup
    .string()
    .required("必須です")
    .email("メールアドレスの形式で入力してください"),
  confirm: yup.boolean().required("The").oneOf([true], ""),
});

type Props = {
  next: string;
};
export const InputPage3: React.FC<Props> = ({ next }) => {
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
    // defaultValues: {
    //   propertyName: propertyName,
    //   postCode: postCode,
    //   locationArea: locationArea,
    //   locationDetail: locationDetail,
    // },
    resolver: yupResolver(schema),
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
      <UserText>ご連絡情報を入力してください（3/3)</UserText>

      <div>
        <InputLabel required label="メールアドレス" />
        <TextForm
          form={form}
          type="email"
          name="email"
          placeholder="taro@sample.com"
        />
      </div>

      <div>
        <InputLabel label="名前" />
        <TextForm form={form} name="username" placeholder="査定　太郎" />
      </div>

      <div>
        <InputLabel label="電話番号" />
        <TextForm
          form={form}
          type="number"
          name="phonenumber"
          placeholder="08012341234"
        />
      </div>

      <div>
        <InputLabel label="弊社へのメッセージ（ご要望など）" />
        <TextForm form={form} name="message" placeholder="" />
      </div>

      <div>
        <InputLabel label="検討状況" />
        <StringGroup
          form={form}
          name="buildingStructure"
          options={[
            {
              label: "今すぐ売りたい",
              value: "sale_now",
            },
            {
              label: "いい条件なら知りたい",
              value: "know_if_good",
            },
            { label: "査定額だけ知りたい", value: "know_only_price" },
          ]}
        />
      </div>

      <NotifyText>
        ご入力の物件について、担当者からご連絡させていただくことがあります
      </NotifyText>

      <div>
        <ExternalLink href="https://www.pricehubble.com/jp/privacy/privacy-policy/">
          個人情報の取り扱い
        </ExternalLink>
        をご確認のうえ、下記にチェックを入れてください。
      </div>

      <HStack justifyContent="center" alignItems="center">
        <CheckBoxForm form={form} name="confirm" />
        上記内容に同意します。
      </HStack>

      <NextNavigaterButton
        label="次へ"
        isValid={isValid}
        next={next}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};
