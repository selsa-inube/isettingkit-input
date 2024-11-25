import { FieldStrategy, IFieldStrategy } from "../types";
import { Textfield } from "@inubekit/input";

const AlphabeticalStrategy: FieldStrategy = {
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
      onChange={(e) => onChange(e.target.value)}
      type="text"
      fullwidth
      message={messageValidate}
      status={statusValidate}
      onBlur={onBlur}
    />
  ),
};

export { AlphabeticalStrategy };
