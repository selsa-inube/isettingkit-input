import { useState } from "react";
import { Tag } from "@inubekit/tag";
import { Text } from "@inubekit/text";
import { SelectCheck } from "../SelectCheck";
import { StyledContainer, StyledSelection } from "./styles";
import { IOptionItemChecked } from "../SelectCheck/OptionItem";

interface MultipleChoicesProps {
  id: string;
  labelSelect: string;
  labelSelected: string;
  onHandleSelectCheckChange: (options: IOptionItemChecked[]) => void;
  options: IOptionItemChecked[];
  placeholderSelect?: string;
  required?: boolean;
  message?: string;
  onBlur?: () => void;
}

const MultipleChoices = (props: MultipleChoicesProps) => {
  const {
    id,
    labelSelect,
    labelSelected,
    onHandleSelectCheckChange,
    options,
    placeholderSelect = "",
    required = false,
    message,
    onBlur,
  } = props;

  const [optionsSelect, setOptionsSelect] = useState(options);

  const onHandleSelectCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = event.target;
    const newOptions = optionsSelect.map((option) => {
      if (option.id === id) {
        return { ...option, checked };
      }
      return option;
    });
    setOptionsSelect(newOptions);
    onHandleSelectCheckChange(newOptions);
  };

  const onRemoveTag = (id: string) => {
    const newOptions = optionsSelect.map((option) => {
      if (option.id === id) {
        return { ...option, checked: false };
      }
      return option;
    });
    setOptionsSelect(newOptions);
    onHandleSelectCheckChange(newOptions);
  };

  return (
    <StyledContainer>
      {optionsSelect.length > 0 &&
        optionsSelect.some((option) => option.checked) && (
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
              {optionsSelect
                .filter((option) => option.checked)
                .map((option) => (
                  <Tag
                    key={option.id}
                    appearance="gray"
                    label={option.label}
                    weight="strong"
                    removable
                    onClose={() => {
                      onRemoveTag(option.id);
                    }}
                  />
                ))}
            </StyledSelection>
          </>
        )}

      <SelectCheck
        id={id}
        label={labelSelect}
        name={id}
        onChangeCheck={onHandleSelectCheck}
        options={optionsSelect}
        placeholder={placeholderSelect}
        required={required}
        value=""
        size="compact"
        fullwidth
        message={message}
        onBlur={onBlur}
      />
    </StyledContainer>
  );
};

export { MultipleChoices };
export type { MultipleChoicesProps };
