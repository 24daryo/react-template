import React, { ReactElement } from "react";
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

interface IntegerProps {
  name: string;
  form: UseFormReturn<any, any>;
  options: { label: string; value: number }[];
  placeholder?: string;
}

interface MainProps<T extends string | number> {
  name: string;
  form: UseFormReturn<any, any>;
  placeholder?: string;
  options: { label: string; value: T }[];
}

export const SelectForm = <T extends string | number>(
  props: React.PropsWithChildren<MainProps<T>>
): ReactElement<any, any> => {
  const { name, form, placeholder, options } = props;
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          name={field.name}
          options={options}
          defaultValue={options.find((x) => {
            if (typeof x.value === "number") {
              return x.value === Number(field.value);
            } else {
              return x.value === String(field.value);
            }
          })}
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

const IntegerSelectForm: React.FC<IntegerProps> = ({
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
