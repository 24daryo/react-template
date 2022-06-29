import { InputLabel } from "@/components/Elements/Texts/InputLabel";
import { SubmitHandler, useForm } from "react-hook-form";
// state
import { CheckBoxForm } from "@/components/Elements/Forms/CheckBoxForm";
import { RadioGroupForm } from "@/components/Elements/Forms/RadioGroupForm";
import { TextFieldForm } from "@/components/Elements/Forms/TextFieldForm";
import { ExternalLink } from "@/components/Elements/Inputs/ExternalLink";
import { HStack } from "@/components/Elements/Layouts/Stack";
import { NotifyText } from "@/components/Elements/Texts/NotifyText";
import { UserText } from "@/components/Elements/Texts/UserText";
import { NextNavigaterButton } from "@/components/Models/Navigaters";
import { Customer, CustomerState } from "@/state/customerState";
import { RealtorState } from "@/state/realtorState";
import { useRecoilState } from "recoil";

export const InputPage3: React.FC<{ next: string }> = ({ next }) => {
  // global state
  const [customer, setCustomer] = useRecoilState(CustomerState);
  const [realtor] = useRecoilState(RealtorState);

  // react-hook-form
  const form = useForm<Customer>({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: customer,
  });
  const {
    formState: { isValid },
    handleSubmit,
  } = form;
  const onSubmit: SubmitHandler<Customer> = (data) => {
    setCustomer(data);
  };

  return (
    <>
      <UserText>ご連絡情報を入力してください（3/3)</UserText>

      <div>
        <InputLabel required={realtor.required.email} label="メールアドレス" />
        <TextFieldForm
          form={form}
          type="email"
          name="email"
          placeholder="taro@sample.com"
          rules={
            realtor.required.email ? { required: "値を入力してください" } : {}
          }
        />
      </div>

      <div>
        <InputLabel required={realtor.required.name} label="名前" />
        <TextFieldForm
          form={form}
          name="name"
          placeholder="査定　太郎"
          rules={
            realtor.required.name ? { required: "値を入力してください" } : {}
          }
        />
      </div>

      <div>
        <InputLabel required={realtor.required.phone} label="電話番号" />
        <TextFieldForm
          form={form}
          type="number"
          name="phone"
          placeholder="08012341234"
          rules={
            realtor.required.phone ? { required: "値を入力してください" } : {}
          }
        />
      </div>

      <div>
        <InputLabel label="弊社へのメッセージ（ご要望など）" />
        <TextFieldForm form={form} name="message" placeholder="" />
      </div>

      <div>
        <InputLabel label="検討状況" />
        <RadioGroupForm
          form={form}
          name="consideration"
          options={[
            {
              label: "今すぐ売りたい",
              value: "sale_now",
            },
            {
              label: "いい条件なら売りたい",
              value: "sale_if_good",
            },
            {
              label: "査定額だけ知りたい",
              value: "know_only_price",
            },
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
        <CheckBoxForm form={form} name="confirm" required />
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
