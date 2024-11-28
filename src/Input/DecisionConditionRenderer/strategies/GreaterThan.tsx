import { DynamicField } from "../../DynamicField";
import { StyledLabelAlignment } from "../styles";
import { IStrategy } from "../types";

function GreaterThanStrategy({
  name,
  nameLabel,
  valueData,
  message,
  status,
  type,
  dataType = "alphabetical",
  onDecision,
}: IStrategy) {
  const handleDecision = (value: string | number, name: string) => {
    try {
      onDecision && onDecision(value, name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledLabelAlignment
      $type={type === "condition" ? "flex-start" : "center"}
    >
      <DynamicField
        name={name!}
        label={nameLabel!}
        value={valueData}
        messageValidate={String(message)}
        statusValidate={status}
        onChange={(value) => handleDecision(value, name!)}
        type={dataType}
      />
    </StyledLabelAlignment>
  );
}

export { GreaterThanStrategy };
