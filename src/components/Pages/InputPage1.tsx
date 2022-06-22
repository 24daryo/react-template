import { useDebounce } from "@/hooks/useDebounce";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
// state
import { useRecoilState } from "recoil";
import {
  locationAreaState,
  locationDetailState,
  postCodeState,
  propertyNameState,
} from "../../state/state";
import { RequiredLabel } from "../Elements/Icons/RequiredLabel";
import { SubmitButton } from "../Elements/Inputs/Buttons/SubmitButton";
import { ErrorMessage } from "../Elements/Inputs/TextFields/ErrorMessage";
import { UserTextField } from "../Elements/Inputs/TextFields/UserTextField";
import { HStack, VStack } from "../Elements/Layouts/Stack";
import SearchInput from "../Elements/SearchInput";
import { UserText } from "../Elements/Texts/UserText";
import { PropertyTypeNavigaterButton } from "../Models/PropertyTypeNavigaterButton";
// material-ui
// import

type FormInput = {
  propertyName: string;
  postCode: string;
  locationArea: string;
  locationDetail: string;
};

const required = true;

const Step1 = () => {
  // global state
  const [propertyName, setPropertyName] = useRecoilState(propertyNameState);
  const [postCode, setPostCode] = useRecoilState(postCodeState);
  const [locationArea, setLocationArea] = useRecoilState(locationAreaState);
  const [locationDetail, setLocationDetail] =
    useRecoilState(locationDetailState);

  // urlのパスを取得
  const params = useParams();
  const { property_type } = params; // apartment or house

  // マンションの入力についてはこちらで制御する
  const debouncedPropertyName = useDebounce(propertyName, 300);
  useEffect(() => {
    if (debouncedPropertyName.length > 0) {
      console.log("マンション入力補完：実行");
      // const mansionList = SearchMansion(debouncedPropertyName)
    }
  }, [debouncedPropertyName]);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    control,
  } = useForm<FormInput>({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      propertyName: propertyName,
      postCode: postCode,
      locationArea: locationArea,
      locationDetail: locationDetail,
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    // set
    setPropertyName(data.propertyName);
    setPostCode(data.postCode);
    setLocationArea(data.locationArea);
    setLocationDetail(data.locationDetail);

    // jump
    navigate(`/${property_type}/details`);
  };

  return (
    <>
      {/* <UserText>マンション種別</UserText> */}
      <VStack spacing={2}>
        <UserText>
          査定したい物件の種類を選択肢、物件の情報を入力してください（1/3)
        </UserText>
        <HStack>
          <PropertyTypeNavigaterButton propertyTypeName="apartment" />
          <PropertyTypeNavigaterButton propertyTypeName="house" />
        </HStack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={2}>
            <SearchInput />
            <div>
              <HStack>
                <UserText>マンション名</UserText>
                <RequiredLabel />
              </HStack>
              <Controller
                name="propertyName"
                control={control}
                rules={{ required: "必須項目です" }}
                render={({ field }) => (
                  <UserTextField
                    {...field}
                    placeholder="〇〇マンション"
                    onChange={(e) => {
                      field.onChange(e);
                      setPropertyName(e.target.value);
                    }}
                  />
                )}
              />
              {errors.propertyName && (
                <ErrorMessage message={errors.propertyName.message} />
              )}
            </div>

            <div>
              <HStack>
                <UserText>郵便番号</UserText>
                <RequiredLabel />
              </HStack>
              <Controller
                name="postCode"
                control={control}
                rules={{
                  required: { value: true, message: "必須項目です" },
                  pattern: {
                    value: /^[0-9]{7}$/,
                    message: "7桁の郵便番号を入力してください",
                  },
                }}
                render={({ field }) => (
                  <UserTextField
                    {...field}
                    type="number"
                    placeholder="0000000"
                    onChange={(e) => {
                      if (e.target.value.length <= 7) field.onChange(e);
                      if (e.target.value.length == 7) {
                        console.log("郵便番号で検索");
                      }
                    }}
                    error={Boolean(errors.postCode)}
                  />
                )}
              />
              {errors.postCode && (
                <ErrorMessage message={errors.postCode.message} />
              )}
            </div>

            <div>
              <HStack>
                <UserText>都道府県・市区群・町名</UserText>
                <RequiredLabel />
              </HStack>
              <Controller
                name="locationArea"
                control={control}
                rules={{
                  required: "必須項目です",
                  maxLength: {
                    value: 30,
                    message: "30文字以内で入力してください",
                  },
                }}
                render={({ field }) => (
                  <UserTextField
                    {...field}
                    placeholder="東京都中央区日本橋"
                    onChange={(e) => {
                      field.onChange(e);
                    }}
                    error={Boolean(errors.locationArea)}
                  />
                )}
              />
              {errors.locationArea && (
                <ErrorMessage message={errors.locationArea.message} />
              )}
            </div>

            <div>
              <HStack>
                <UserText>丁目以降</UserText>
                <RequiredLabel />
              </HStack>

              <Controller
                name="locationDetail"
                control={control}
                rules={{
                  required: "必須項目です",
                }}
                render={({ field }) => (
                  <UserTextField
                    {...field}
                    placeholder="1-1-1"
                    error={Boolean(errors.locationDetail)}
                  />
                )}
              />
              <br />
              {errors.locationDetail && (
                <ErrorMessage message={errors.locationDetail.message} />
              )}
            </div>

            <SubmitButton label="次へ" disabled={!isValid} />
          </VStack>
        </form>
      </VStack>
    </>
  );
};

export default Step1;
