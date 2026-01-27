import { FieldStrategy, IFieldStrategy } from "../types";
import { Numberfield } from "@inubekit/inubekit";

const NumberStrategy: FieldStrategy = {
  render: ({
    name,
    label,
    value,
    onChange,
    messageValidate,
    statusValidate,
    onBlur,
    placeholder,
  }: IFieldStrategy) => (
    <Numberfield
      id={name}
      label={label}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      fullwidth
      message={messageValidate}
      status={statusValidate as "invalid" | "pending" | undefined}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  ),
};

export { NumberStrategy };
