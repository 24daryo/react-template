import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
// state
import { useRecoilState } from "recoil";
import { totalFloorState } from "../../state/state";
// material-ui
// import

type FormInput = {
  totalFloor: number | null;
};

const Step2 = () => {
  const params = useParams();
  const { property_type } = params; // apartment or house

  // global state
  const [totalFloor, setTotalFloor] = useRecoilState(totalFloorState);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
      totalFloor: totalFloor,
    },
  });

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    // set
    setTotalFloor(data.totalFloor);

    // jump
    navigate(`info`);
    // navigate(`/${property_type}/details`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>入力ページ２</h2>

      <label>建物の階数</label>
      <br />
      <Controller
        name="totalFloor"
        control={control}
        rules={{
          required: "建物の階数は1から60階を入力してください",
          min: 1,
          max: 20,
        }}
        render={({ field }) => <TextField {...field} />}
      />
      {errors.totalFloor && <span>{errors.totalFloor.message}</span>}
      <br />
      <br />

      <input type="submit" />
    </form>
  );
};

export default Step2;
