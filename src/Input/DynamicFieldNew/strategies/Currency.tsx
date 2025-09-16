import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import { Moneyfield, Stack, Text } from "@inubekit/inubekit";
import { currencyFormat } from "../../utils";

const CurrencyStrategyNew: FieldStrategyNew = {
  render: ({
    condition,
    name,
    label,
    value,
    onChange,
    messageValidate,
    statusValidate,
    onBlur,
  }: IFieldStrategyNew) => (
    <Stack alignItems="center" gap="16px" width="100%">
      <Text
        type={condition ? "body" : "title"}
        weight={condition ? "normal" : "bold"}
        size="medium"
        appearance={condition ? "dark" : "primary"}
      >
        {label}
      </Text>
      <Moneyfield
        id={name}
        value={currencyFormat(value as number)}
        onChange={(e) =>
          onChange(parseFloat(e.target.value.replace(/[^0-9.]/g, "")) || 0)
        }
        fullwidth
        message={messageValidate}
        status={statusValidate as "invalid" | "pending" | undefined}
        onBlur={onBlur}
      />
    </Stack>
  ),
};

export { CurrencyStrategyNew };
