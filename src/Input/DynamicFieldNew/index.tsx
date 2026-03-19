import { IDynamicField } from "../types/IDynamicField";
import { getFieldStrategy } from "./utils";

const DynamicFieldNew = (props: IDynamicField) => {
  const {
    condition,
    type,
    name,
    label,
    placeholder,
    value,
    onChange,
    messageValidate,
    statusValidate,
    onBlur,
    listOfPossibleValues,
  } = props;
  const strategy = getFieldStrategy(type);

  if (!strategy) {
    console.error(`Unsupported field type: ${type}`);
    return null;
  }

  return (
    <>
      {strategy.render({
        condition,
        name,
        label,
        placeholder,
        value,
        onChange,
        messageValidate,
        statusValidate,
        onBlur,
        listOfPossibleValues,
      })}
    </>
  );
};

export { DynamicFieldNew };
