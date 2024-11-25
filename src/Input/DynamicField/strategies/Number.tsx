import { FieldStrategy, IFieldStrategy } from "../types";
import { Textfield } from "@inubekit/input";

const NumberStrategy: FieldStrategy = {
  render: ({
    name,
    label,
    value,
    onChange,
    messageValidate,
    statusValidate,
    onBlur,
  }: IFieldStrategy) => (
    <Textfield
      id={name}
      label={label}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      type="number"
      fullwidth
      message={messageValidate}
      status={statusValidate}
      onBlur={onBlur}
    />
  ),
};

export { NumberStrategy };
