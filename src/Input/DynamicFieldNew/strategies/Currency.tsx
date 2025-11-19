import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import { Moneyfield, Select, Stack, Text } from "@inubekit/inubekit";
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
    listOfPossibleValues,
  }: IFieldStrategyNew) => {
    const options =
      listOfPossibleValues?.list?.map((item: string) => ({
        id: item,
        label: item,
        value: item,
      })) || [];
    return (
      <Stack alignItems="center" gap="16px" width="100%">
        <Text
          type={condition ? "body" : "title"}
          weight={condition ? "normal" : "bold"}
          size="medium"
          appearance={condition ? "dark" : "primary"}
        >
          {label}
        </Text>
        {listOfPossibleValues ? (
          <Select
            id={`${name}-select`}
            options={options}
            value={String(value)}
            onChange={(name, val) => onChange(name, val)}
            message={messageValidate}
            fullwidth
            name={`${name}-select`}
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
