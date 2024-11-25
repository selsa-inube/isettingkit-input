import { InputRange } from "../../InputRange";
import { StyledLabelRangeAlignment } from "../styles";
import { IStrategy } from "../types";

function RangeStrategy({
  name,
  nameLabel,
  valueData,
  message,
  status,
  handleRangeChangeFrom,
  handleRangeChangeTo,
  type,
  dataType = "number",
}: IStrategy) {
  const messageFrom =
    typeof message === "object" && "from" in message
      ? String(message.from)
      : undefined;
  const messageTo =
    typeof message === "object" && "to" in message
      ? String(message.to)
      : undefined;
  const statusFrom =
    typeof status === "object" && "from" in status ? status.from : "pending";
  const statusTo =
    typeof status === "object" && "to" in status ? status.to : "pending";
  return (
    <StyledLabelRangeAlignment
      $type={type === "condition" ? "flex-start" : "center"}
    >
      <InputRange
        id={name}
        label={nameLabel}
        valueFrom={valueData?.from}
        valueTo={valueData?.to}
        messageFrom={messageFrom}
        messageTo={messageTo}
        statusFrom={statusFrom}
        statusTo={statusTo}
        handleInputChangeFrom={handleRangeChangeFrom!}
        handleInputChangeTo={handleRangeChangeTo!}
        typeInput={dataType}
      />
    </StyledLabelRangeAlignment>
  );
}

export { RangeStrategy };
