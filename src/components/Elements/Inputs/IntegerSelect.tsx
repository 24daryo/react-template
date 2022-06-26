import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import Select from "react-select";

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    padding: 10,
    paddingLeft: 20,
  }),
  control: (provided: any) => ({
    ...provided,
    padding: 8,
  }),
};

interface Option {
  label: string;
  value: number;
}

interface Props {
  name: string;
  form: UseFormReturn<any, any>;
  options: Option[];
  placeholder?: string;
}

export const IntegerSelect: React.FC<Props> = ({
  name,
  form,
  options,
  placeholder,
}) => {
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          name={field.name}
          options={options}
          defaultValue={options.find((x) => x.value === Number(field.value))}
          styles={customStyles}
          onChange={(newValue) => {
            field.onChange(newValue?.value);
          }}
          placeholder={placeholder}
        />
      )}
    />
  );
};
