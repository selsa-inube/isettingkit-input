import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import {
  Text,
  Stack,
  Numberfield,
  Icon,
  Select,
  IOption,
} from "@inubekit/inubekit";
import { MdOutlinePercent } from "react-icons/md";

const PercentageStrategyNew: FieldStrategyNew = {
  render: ({
    condition,
    name,
    label,
    value = "",
    onChange,
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
          <Numberfield
            id={name}
            value={value}
            onChange={(e) => onChange(name, parseFloat(e.target.value) || 0)}
            fullwidth
            iconAfter={
              <Icon appearance="dark" icon={<MdOutlinePercent />} size="18px" />
            }
            message={messageValidate}
            status={statusValidate as "invalid" | "pending" | undefined}
            onBlur={onBlur}
          />
        )}
      </Stack>
    );
  },
};

export { PercentageStrategyNew };
