import { Checkbox } from "@mui/material";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

interface Props {
  name: string;
  form: UseFormReturn<any, any>;
  required?: boolean;
}

export const CheckBoxForm: React.FC<Props> = ({ name, form, required }) => {
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      rules={
        required
          ? {
              validate: (value) => value === true,
            }
          : {}
      }
      render={({ field }) => <Checkbox {...field} checked={field.value} />}
    />
  );
};
