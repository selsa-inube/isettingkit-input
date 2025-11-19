import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import { Select, Stack, Text, Textfield } from "@inubekit/inubekit";

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
          <Textfield
            id={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            placeholder={placeholder}
            type="text"
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

export { AlphabeticalStrategyNew };
