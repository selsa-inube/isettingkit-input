import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import { Text, Stack, Date as Datefield } from "@inubekit/inubekit";

const DateStrategyNew: FieldStrategyNew = {
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
      <Datefield
        id={name}
        value={value as string}
        onChange={(e) => onChange(name, e.target.value)}
        fullwidth
        message={messageValidate}
        status={statusValidate as "invalid" | "pending" | undefined}
        onBlur={onBlur}
      />
    </Stack>
  ),
};

export { DateStrategyNew };
