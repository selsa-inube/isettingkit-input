import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import {
  Text,
  Stack,
  Date as Datefield,
  Select,
  IOption,
} from "@inubekit/inubekit";

const DateStrategyNew: FieldStrategyNew = {
  render: ({
    condition,
    name,
    label,
    value = "",
    required,
    onChange,
    messageValidate,
    statusValidate,
    onBlur,
    listOfPossibleValues,
    placeholder,
  }: IFieldStrategyNew) => (
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
          placeholder={placeholder}
          invalid={statusValidate === "invalid"}
          onBlur={onBlur}
        />
      ) : (
        <Datefield
          id={name}
          value={value as string}
          onChange={(e) => onChange(name, e.target.value)}
          fullwidth
          required={required}
          message={messageValidate}
          status={statusValidate as "invalid" | "pending" | undefined}
          onBlur={onBlur}
        />
      )}
    </Stack>
  ),
};

export { DateStrategyNew };
