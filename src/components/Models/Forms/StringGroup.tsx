import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

interface Props {
  name: string;
  form: UseFormReturn<any, any>;
  options: LabelType[];
}

interface LabelType {
  label: string;
  value: string;
}

export const StringGroup: React.FC<Props> = ({ name, form, options }) => {
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroup
          name={field.name}
          onChange={(e) => field.onChange(e.target.value)}
          value={field.value === undefined ? "" : field.value}
        >
          {options.map(({ value, label }, index) => {
            return (
              <FormControlLabel
                value={value}
                control={<Radio />}
                label={label}
              />
            );
          })}
        </RadioGroup>
      )}
    />
  );
};
