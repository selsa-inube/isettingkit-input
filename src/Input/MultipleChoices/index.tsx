import { Checkpicker, IOption, Tag, Text } from "@inubekit/inubekit";
import { StyledContainer, StyledSelection } from "./styles";
import { ICheckpickerSize } from "./stories/props";

interface IMultipleChoices {
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

const MultipleChoices = (props: IMultipleChoices) => {
  const {
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
    <StyledContainer>
      {selectedOptions.length > 0 && (
        <>
          <Text
            margin="0 0 4px 0"
            padding="0 0 0 16px"
            type="label"
            size="medium"
            weight="bold"
          >
            {labelSelected}
          </Text>
          <StyledSelection>
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
          </StyledSelection>
        </>
      )}

      <Checkpicker
        id={id}
        label={labelSelect}
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
    </StyledContainer>
  );
};

export { MultipleChoices };
export type { IMultipleChoices };
