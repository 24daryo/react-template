import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { UseFormReturn } from "react-hook-form";

// BAD!!
// export const UserTextField: React.FC<TextFieldProps> = (props) => {
//   return <TextField {...props} />;
// };

export const UserTextField: React.FC<TextFieldProps> = React.forwardRef(
  ({ ...props }, ref) => {
    return <TextField {...props} ref={ref} fullWidth />;
  }
);

interface Props {
  placeholder: string;
  form: UseFormReturn<any, any>;
  name: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const TextForm: React.FC<TextFieldProps & Props> = (props) => {
  const {
    register,
    formState: { errors },
  } = props.form;
  const { onChange, onBlur, name, ref } = register(props.name);
  return (
    <UserTextField
      {...props}
      onChange={(e) => {
        onChange(e);
        if (props.onChange) props.onChange(e);
      }}
      onBlur={onBlur}
      name={name}
      ref={ref}
      placeholder={props.placeholder}
      error={props.name in errors}
      helperText={errors[props.name]?.message}
    />
  );
};
