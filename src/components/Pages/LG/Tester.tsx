import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Stack, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

// フォームの型
interface SampleFormInput {
  email: string;
  name: string;
  password: string;
}

// バリデーションルール
const schema = yup.object({
  email: yup
    .string()
    .required("必須です")
    .email("正しいメールアドレス入力してね"),
  name: yup
    .string()
    .matches(
      /^[0-9]{7}$/,
      "郵便番号は半角数字7桁・ハイフンなしで入力してください"
    ),
  password: yup
    .string()
    .required("必須です")
    .min(6, "文字を増やしてください")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
      "弱いパスワードです"
    ),
});

export const Tester = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormInput>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<SampleFormInput> = (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    console.log(data);
  };

  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <Stack spacing={3}>
        <TextField
          required
          label="メールアドレス"
          placeholder="test@gmail.com"
          type="email"
          {...register("email")}
          error={"email" in errors}
          helperText={errors.email?.message}
        />
        <TextField
          required
          label="お名前"
          {...register("name")}
          error={"name" in errors}
          helperText={errors.name?.message}
        />
        <TextField
          required
          label="パスワード"
          type="password"
          {...register("password")}
          error={"password" in errors}
          helperText={errors.password?.message}
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
        >
          作成
        </Button>
      </Stack>
    </Container>
  );
};
