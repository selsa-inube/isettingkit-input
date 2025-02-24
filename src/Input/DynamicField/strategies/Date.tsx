import { FieldStrategy, IFieldStrategy } from "../types";
import { Date as Datefield } from "@inubekit/inubekit";

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
      status={statusValidate as "invalid" | "pending" | undefined}
      onBlur={onBlur}
    />
  ),
};

export { DateStrategy };
