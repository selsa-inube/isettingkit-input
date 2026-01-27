import { FieldStrategyNew, IFieldStrategyNew } from "../types";
import {
  Text,
  Stack,
  Textfield,
  Icon,
  Select,
  IOption,
} from "@inubekit/inubekit";
import { MdOutlinePercent } from "react-icons/md";
import { parsePercentageString } from "../../utils";

const PercentageStrategyNew: FieldStrategyNew = {
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
    const normalizedValue =
      value === undefined || value === null ? "" : String(value);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;

      if (raw === "") {
        onChange(name, "");
        return;
      }

      const validPattern = /^-?\d*(?:[.,]\d*)?$/;
      if (!validPattern.test(raw)) {
        return;
      }

      const parsed = parsePercentageString(raw);

      if (Number.isNaN(parsed)) {
        onChange(name, raw);
      } else {
        onChange(name, parsed);
      }
    };

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
          <Textfield
            id={name}
            value={normalizedValue}
            onChange={handleTextChange}
            fullwidth
            required={required}
            iconAfter={
              <Icon appearance="dark" icon={<MdOutlinePercent />} size="18px" />
            }
            type="text"
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

export { PercentageStrategyNew };
