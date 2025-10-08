import { useState } from "react";
import { DynamicFieldNew } from "..";
import { FieldType } from "../types";

import { IDynamicField } from "../../../Input/types/IDynamicField";
import { IInputStatus } from "../../../Input/types/IInputStatus";

const validationStrategies: Record<FieldType, (value: string) => boolean> = {
  alphabetical: (value) => /^[a-zA-Z]+$/.test(value),
  number: (value) => /^[0-9]*$/.test(value),
  currency: (value) => /^[0-9]*$/.test(value),
  percentage: (value) => /^\d{1,2}(\.\d+)?%?$/.test(value),
};

const messages: Record<FieldType, string> = {
  alphabetical: "Please enter only letters.",
  number: "Please enter a valid number.",
  currency: "Please enter a valid number.",
  percentage: "Please enter a valid percentage.",
};

const DynamicFieldController = (props: IDynamicField) => {
  const { value = "", statusValidate = "pending", type } = props;

  const typedType = type as FieldType;

  const [form, setForm] = useState({
    value: value,
    status: statusValidate,
  });

  const onChange = (value: string | number) => {
    console.log("onChange", value);
    setForm({ value, status: "pending" });
  };

  const onBlur = () => {
    const validate = validationStrategies[typedType];
    const isValid = validate ? validate(form.value as string) : true;

    setForm({
      ...form,
      status: isValid ? "pending" : "invalid",
    });
  };

  const getMessage = () => messages[typedType] || "";

  return (
    <DynamicFieldNew
      {...props}
      value={form.value}
      onChange={onChange}
      statusValidate={form.status as IInputStatus}
      onBlur={onBlur}
      messageValidate={getMessage()}
    />
  );
};

export { DynamicFieldController };
