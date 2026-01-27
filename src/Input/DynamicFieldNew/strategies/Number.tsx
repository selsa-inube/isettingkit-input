import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import { Text, Stack, Numberfield, Select, IOption } from "@inubekit/inubekit";

const NumberStrategyNew: FieldStrategyNew = {
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
    placeholder,
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
            placeholder={placeholder}
            invalid={statusValidate === "invalid"}
            onBlur={onBlur}
          />
        ) : (
          <Numberfield
            id={name}
            value={value}
            onChange={(e) => onChange(name, parseFloat(e.target.value) || 0)}
            fullwidth
            required={required}
            message={messageValidate}
            status={statusValidate as "invalid" | "pending" | undefined}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        )}
      </Stack>
    );
  },
};

export { NumberStrategyNew };
