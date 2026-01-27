import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import { IOption, Moneyfield, Select, Stack, Text } from "@inubekit/inubekit";
import { currencyFormat } from "../../utils";

const CurrencyStrategyNew: FieldStrategyNew = {
  render: ({
    condition,
    name,
    label,
    value = "",
    onChange,
    required,
    messageValidate,
    statusValidate,
    onBlur,
    listOfPossibleValues,
  }: IFieldStrategyNew) => {
    return (
      <Stack
        alignItems={statusValidate === "invalid" ? "baseline" : "center"}
        gap="16px"
        width="100%"
      >
        <Text
          type={condition ? "body" : "title"}
          weight={condition ? "normal" : "bold"}
          size="medium"
          appearance={
            statusValidate === "invalid"
              ? "danger"
              : condition
                ? "dark"
                : "primary"
          }
        >
          {label}
        </Text>
        {listOfPossibleValues ? (
          <Select
            id={`${name}-select`}
            options={listOfPossibleValues.list as IOption[]}
            value={String(value)}
            onChange={(name, val) => onChange(name, val)}
            message={messageValidate}
            fullwidth
            name={`${name}-select`}
            placeholder="Seleccione una opción"
            invalid={statusValidate === "invalid"}
            onBlur={onBlur}
          />
        ) : (
          <Moneyfield
            id={name}
            value={currencyFormat(value as number)}
            onChange={(e) => {
              const cleanValue =
                parseFloat(e.target.value.replace(/[^0-9.]/g, "")) || 0;

              onChange(name, cleanValue);
            }}
            fullwidth
            required={required}
            message={messageValidate}
            status={statusValidate as "invalid" | "pending" | undefined}
            onBlur={onBlur}
          />
        )}
      </Stack>
    );
  },
};

export { CurrencyStrategyNew };
