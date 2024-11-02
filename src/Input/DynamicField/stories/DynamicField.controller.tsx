import { useState } from "react";
import { DynamicField, IDynamicField } from "..";

const DynamicFieldController = (props: IDynamicField) => {
  const { valueInput = "", statusValidate = "pending", type } = props;
  const [form, setForm] = useState({
    value: valueInput,
    status: statusValidate,
  });

  const isAlphabetical = (value: string) => /^[a-zA-Z]+$/.test(value);
  const isNumeric = (value: string) => /^[0-9]*$/.test(value);
  const isPercentage = (value: string) => /^\d{1,2}(\.\d+)?%?$/.test(value);

  const onChange = (value: string | number) => {
    console.log("onChange", value);
    setForm({ value, status: "pending" });
  };

  const onBlur = () => {
    let isValid = true;

    if (type === "alphabetical") {
      isValid = isAlphabetical(form.value as string);
    } else if (type === "number" || type === "currency") {
      isValid = isNumeric(form.value as string);
    } else if (type === "percentage") {
      isValid = isPercentage(form.value as string);
    }

    setForm({
      ...form,
      status: isValid ? "pending" : "invalid",
    });
  };

  const message = () => {
    switch (type) {
      case "alphabetical":
        return "Please enter only letters.";
      case "number":
      case "currency":
        return "Please enter a valid number.";
      case "percentage":
        return "Please enter a valid percentage.";
      default:
        return "";
    }
  };

  return (
    <DynamicField
      {...props}
      valueInput={form.value}
      handleChange={onChange}
      statusValidate={form.status}
      onBlur={onBlur}
      messageValidate={message()}
    />
  );
};

export { DynamicFieldController };
