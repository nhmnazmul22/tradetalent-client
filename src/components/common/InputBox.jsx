import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const InputBox = ({
  label = "",
  isRequired = false,
  placeholder = "",
  defaultValue = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      <Label className="text-base">
        {label}
        {isRequired && <span className="text-red-600 ms-1">*</span>}
      </Label>
      <Input
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={isRequired}
        {...props}
      ></Input>
    </div>
  );
};

export default InputBox;
