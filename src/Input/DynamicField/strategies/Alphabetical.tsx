import { FieldStrategy, IFieldStrategy } from "../types";
import { Textfield } from "@inubekit/inubekit";

const AlphabeticalStrategy: FieldStrategy = {
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
    <Textfield
      id={name}
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="text"
      fullwidth
      message={messageValidate}
      status={statusValidate as "invalid" | "pending" | undefined}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  ),
};

export { AlphabeticalStrategy };
