import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import Select from "react-select";

const defaultOption = { label: "未選択", value: "" };
const options = [
  defaultOption,
  { label: "ワンルーム", value: "ワンルーム" },
  { label: "1K", value: "1K" },
  { label: "1DK/LDK", value: "1DK/LDK" },
  { label: "2K/DK/LDK", value: "2K/DK/LDK" },
  { label: "3K/DK/LDK", value: "3K/DK/LDK" },
  { label: "4K/DK/LDK", value: "4K/DK/LDK" },
  { label: "5K以上", value: "5K以上" },
];

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

interface Props {
  name: string;
  form: UseFormReturn<any, any>;
}

const valueLabel = (value: string) => {
  const result = options.find((x) => x.value === value);
  return result ? result : defaultOption;
};

export const LayoutSelect: React.FC<Props> = (props) => {
  const { control } = props.form;
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field }) => (
        <Select
          options={options}
          defaultValue={valueLabel(field.value)}
          styles={customStyles}
          onChange={(newValue) => {
            field.onChange(newValue?.value);
          }}
        />
      )}
    />
  );
};
