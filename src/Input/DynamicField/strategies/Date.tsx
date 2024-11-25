import { FieldStrategy, IFieldStrategy } from "../types";
import { Date as Datefield } from "@inubekit/date";

const DateStrategy: FieldStrategy = {
  render: ({
    name,
    label,
    value,
    onChange,
    messageValidate,
    statusValidate,
    onBlur,
  }: IFieldStrategy) => (
    <Datefield
      id={name}
      label={label}
      value={value as string}
      onChange={(e) => onChange(e.target.value)}
      fullwidth
      message={messageValidate}
      status={statusValidate}
      onBlur={onBlur}
    />
  ),
};

export { DateStrategy };
