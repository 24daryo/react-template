import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// state
import { useRecoilState } from "recoil";
import { locationAreaState, locationDetailState, propertyNameState, propertyTypeState } from "../../state/state";
// material-ui
// import

type FormInput = {
  propertyType: string;
  propertyName: string;
  locationArea: string;
  locationDetail: string;
};

const FieldInput = () => {};

const Step1 = () => {
  // global state
  const [propertyType, setPropertyType] = useRecoilState(propertyTypeState);
  const [propertyName, setPropertyName] = useRecoilState(propertyNameState);
  const [locationArea, setLocationArea] = useRecoilState(locationAreaState);
  const [locationDetail, setLocationDetail] = useRecoilState(locationDetailState);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
      propertyName: propertyName,
      locationArea: locationArea,
      locationDetail: locationDetail,
      propertyType: propertyType,
    },
  });

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    // set
    setPropertyName(data.propertyName);
    setLocationArea(data.locationArea);
    setLocationDetail(data.locationDetail);

    // jump
    navigate("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>入力ページ1</h2>

      {/* <h2>マンション種別</h2> */}
      <label>マンション種別</label>
      <Controller
        name="propertyType"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <RadioGroup aria-label="propertyType" {...field}>
            <FormControlLabel value="apartment" control={<Radio />} label="apartment" />
            <FormControlLabel value="house" control={<Radio />} label="house" />
            {/* <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
          </RadioGroup>
        )}
      />
      <br />

      <label>マンション名</label>
      <br />
      <Controller
        name="propertyName"
        control={control}
        rules={{
          required: "必須項目です",
          maxLength: {
            value: 30,
            message: "30文字以内で入力してください",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            onChange={(e) => {
              field.onChange(e);
              // console.log("変更しました");
            }}
          />
        )}
      />
      {errors.propertyName && <span>{errors.propertyName.message}</span>}
      <br />
      <br />

      <label>都道府県・市区群・町名</label>
      <br />
      <Controller
        name="locationArea"
        control={control}
        rules={{
          required: "必須項目です",
          maxLength: {
            value: 20,
            message: "20文字以内で入力してください",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            onChange={(e) => {
              field.onChange(e);
              // console.log("変更しました");
            }}
          />
        )}
      />
      {errors.locationArea && <span>{errors.locationArea.message}</span>}
      <br />
      <br />

      <label>丁目以降</label>
      <br />
      <Controller
        name="locationDetail"
        control={control}
        rules={{
          required: "必須項目です",
        }}
        render={({ field }) => <TextField {...field} />}
      />
      {errors.locationDetail && <span>{errors.locationDetail.message}</span>}
      <br />
      <br />

      <input type="submit" />
    </form>
  );
};

export default Step1;
