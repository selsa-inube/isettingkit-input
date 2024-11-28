import { MultipleChoices } from "../../MultipleChoices";
import { StyledLabelRangeAlignment } from "../styles";
import { IStrategy } from "../types";

function ListOfValuesMultiStrategy({
  name,
  nameLabel,
  possibleValues,
  textValues,
  message,
  type,
  handleMultipleChoicesChange,
  value,
}: IStrategy) {
  return (
    <StyledLabelRangeAlignment
      $type={type === "condition" ? "flex-start" : "center"}
    >
      <MultipleChoices
        id={name!}
        labelSelect={nameLabel!}
        labelSelected={textValues.selectOption}
        placeholderSelect={textValues.selectOptions}
        options={
          Array.isArray(possibleValues?.list)
            ? possibleValues.list.map((item) => ({
                id: item,
                label: item,
                checked: Array.isArray(value) && value.includes(item),
              }))
            : []
        }
        message={String(message)}
        onHandleSelectCheckChange={handleMultipleChoicesChange!}
      />
    </StyledLabelRangeAlignment>
  );
}

export { ListOfValuesMultiStrategy };
