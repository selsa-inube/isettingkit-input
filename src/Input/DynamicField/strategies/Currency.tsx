import { FieldStrategy, IFieldStrategy } from "../types";
import { Textfield } from "@inubekit/inubekit";
import { currencyFormat } from "../../utils";

const CurrencyStrategy: FieldStrategy = {
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
      value={currencyFormat(value as number)}
      onChange={(e) =>
        onChange(parseFloat(e.target.value.replace(/[^0-9.]/g, "")) || 0)
      }
      type="text"
      fullwidth
      message={messageValidate}
      status={statusValidate as "invalid" | "pending" | undefined}
      onBlur={onBlur}
    />
  ),
};

export { CurrencyStrategy };
