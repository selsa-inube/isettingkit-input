import {
  Box,
  Checkpicker,
  IOption,
  Stack,
  Tag,
  Text,
} from "@inubekit/inubekit";
import { ICheckpickerSize } from "./stories/props";

interface IMultipleChoicesNew {
  condition?: boolean;
  id: string;
  labelSelect: string;
  labelSelected: string;
  options: IOption[];
  placeholderSelect?: string;
  required?: boolean;
  message?: string;
  onBlur?: () => void;
  values: string;
  onChange: (name: string, value: string) => void;
  size?: ICheckpickerSize;
}

const MultipleChoicesNew = (props: IMultipleChoicesNew) => {
  const {
    condition,
    id,
    labelSelect,
    labelSelected,
    options,
    placeholderSelect = "",
    required = false,
    message,
    values,
    onChange,
    size = "wide",
  } = props;

  const selectedIds =
    typeof values === "string" ? values.split(",").filter(Boolean) : [];

  const selectedOptions = options.filter((option) =>
    selectedIds.includes(option.id),
  );

  const handleCheckpickerChange = (name: string, newValue: string) => {
    onChange(name, newValue);
  };

  const onRemoveTag = (removedValue: string) => {
    const updatedIds = selectedIds
      .filter((val) => val !== removedValue)
      .join(",");
    onChange(id, updatedIds);
  };

  return (
    <Stack direction="column" padding="0" gap="16px">
      {selectedOptions.length > 0 && (
        <Stack gap="16px" alignItems="center">
          <Text
            type={condition ? "body" : "title"}
            weight={condition ? "normal" : "bold"}
            size="medium"
            appearance={condition ? "dark" : "primary"}
          >
            {labelSelected}
          </Text>
          <Box>
            <Stack gap="8px" width="71.6rem">
              {selectedOptions.map((option) => (
                <Tag
                  key={option.id}
                  appearance="gray"
                  label={option.label}
                  removable
                  onClose={() => onRemoveTag(option.value)}
                  displayIcon={false}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      )}
      <Stack gap="16px" alignItems="center">
        <Text
          type={condition ? "body" : "title"}
          weight={condition ? "normal" : "bold"}
          size="medium"
          appearance={condition ? "dark" : "primary"}
        >
          {labelSelect}
        </Text>
        <Checkpicker
          id={id}
          name={id}
          onChange={handleCheckpickerChange}
          options={options}
          placeholder={placeholderSelect}
          required={required}
          values={values}
          size={size}
          fullwidth
          message={message}
        />
      </Stack>
    </Stack>
  );
};

export { MultipleChoicesNew };
export type { IMultipleChoicesNew };
