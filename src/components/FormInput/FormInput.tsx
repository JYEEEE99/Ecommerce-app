import { FormInputBox, FormInputEl, FormLabelEl } from "@/style/Form.style";
import React from "react";

interface FormInputProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <FormInputBox>
      <FormLabelEl htmlFor={id}>{label}</FormLabelEl>
      <FormInputEl
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </FormInputBox>
  );
};

export default FormInput;
