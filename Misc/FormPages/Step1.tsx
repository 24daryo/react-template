import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// state
import { useRecoilState } from "recoil";
import { ageState, genderState, nameState } from "./state";
// material-ui
// import

type FormInput = {
  name: string;
  age: number;
  gender: string;
};

const Step1 = () => {
  // global state
  const [name, setName] = useRecoilState(nameState);
  const [age, setAge] = useRecoilState(ageState);
  const [gender, setGender] = useRecoilState(genderState);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
      name: name,
      age: age,
      gender: gender,
    },
  });

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    // set
    setName(data.name);
    setAge(data.age);
    setGender(data.gender);
    // jump
    navigate("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>

      <Controller
        name="gender"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <RadioGroup aria-label="gender" {...field}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
          </RadioGroup>
        )}
      />

      <label>Name:</label>
      <Controller
        name="name"
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
              console.log("変更しました");
            }}
          />
        )}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <br />

      <label>Age:</label>
      <input type="number" {...register("age", { required: true })} />
      <br />

      <input type="submit" />
    </form>
  );
};

export default Step1;
