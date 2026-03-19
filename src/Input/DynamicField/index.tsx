import { getFieldStrategy } from "./utils";
import { IFieldStrategy } from "./types";

interface IDynamicField extends IFieldStrategy {
  type: string;
}

const DynamicField = ({
  type,
  name,
  label,
  value,
  onChange,
  messageValidate,
  statusValidate,
  onBlur,
  placeholder,
}: IDynamicField) => {
  const strategy = getFieldStrategy(type);

  if (!strategy) {
    console.error(`Unsupported field type: ${type}`);
    return null;
  }

  return (
    <>
      {strategy.render({
        name,
        label,
        value,
        onChange,
        messageValidate,
        statusValidate,
        onBlur,
        placeholder,
      })}
    </>
  );
};

export { DynamicField };
export type { IDynamicField };
