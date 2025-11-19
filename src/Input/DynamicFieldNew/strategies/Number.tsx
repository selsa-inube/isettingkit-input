import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import { Text, Stack, Numberfield, Select } from "@inubekit/inubekit";

const NumberStrategyNew: FieldStrategyNew = {
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
          <Numberfield
            id={name}
            value={value}
            onChange={(e) => onChange(name, parseFloat(e.target.value) || 0)}
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

export { NumberStrategyNew };
