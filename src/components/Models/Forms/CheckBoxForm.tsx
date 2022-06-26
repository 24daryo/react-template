import { Checkbox } from "@mui/material";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

interface Props {
  name: string;
  form: UseFormReturn<any, any>;
}

export const CheckBoxForm: React.FC<Props> = ({ name, form }) => {
  const {
    control,
    formState: { errors },
  } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <Checkbox
            {...field}
            checked={field.value}
            onChange={(e) => field.onChange(e.target.checked)}
          />
        </>
      )}
    />
  );
};
