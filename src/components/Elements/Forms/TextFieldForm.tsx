import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

interface CustomProps {
  name: string;
  form: UseFormReturn<any, any>;
  placeholder: string;
  rules?: any;
}

export const TextFieldForm: React.FC<TextFieldProps & CustomProps> = (
  props
) => {
  const { form } = props;
  const {
    control,
    formState: { errors },
  } = form;
  return (
    <Controller
      rules={props.rules}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          placeholder={props.placeholder}
          error={field.name in errors}
          helperText={errors[field.name]?.message}
        />
      )}
      control={control}
      name={props.name}
    />
  );
};
