import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import { Text, Stack, Numberfield } from "@inubekit/inubekit";

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
      <Numberfield
        id={name}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        fullwidth
        message={messageValidate}
        status={statusValidate as "invalid" | "pending" | undefined}
        onBlur={onBlur}
      />
    </Stack>
  ),
};

export { NumberStrategyNew };
