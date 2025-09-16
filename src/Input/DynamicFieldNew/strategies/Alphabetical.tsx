import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import { Stack, Text, Textfield } from "@inubekit/inubekit";

const AlphabeticalStrategyNew: FieldStrategyNew = {
  render: ({
    name,
    label,
    value,
    placeholder,
    onChange,
    messageValidate,
    statusValidate,
    onBlur,
    condition,
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
      <Textfield
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type="text"
        fullwidth
        message={messageValidate}
        status={statusValidate as "invalid" | "pending" | undefined}
        onBlur={onBlur}
      />
    </Stack>
  ),
};

export { AlphabeticalStrategyNew };
