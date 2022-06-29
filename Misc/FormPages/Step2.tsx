import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// state
import { useRecoilState } from "recoil";
import { detailState, yearState } from "./state";

type FormInput = {
  year: string;
  detail: number;
};

const Step2 = () => {
  // global state
  const [year, setYear] = useRecoilState(yearState);
  const [detail, setDetail] = useRecoilState(detailState);

  // react-hook-form
  const { register, handleSubmit } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
      year: year,
      detail: detail,
    },
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    setYear(data.year);
    setDetail(data.detail);
    navigate("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Year:
        <input {...register("year", { required: true })} />
      </label>
      <label>
        Detail:
        <input {...register("detail", { required: true })} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step2;
