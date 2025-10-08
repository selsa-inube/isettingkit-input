import { useState } from "react";
import { InputRange, IInputRange } from "..";
import { IInputStatus } from "../../../Input/types/IInputStatus";

interface IInputRangeController
  extends Omit<
    IInputRange,
    "statusFrom" | "messageFrom" | "statusTo" | "messageTo"
  > {}

const InputRangeController = (props: IInputRangeController) => {
  const [statusFrom, setStatusFrom] = useState<IInputStatus | undefined>();
  const [statusTo, setStatusTo] = useState<IInputStatus | undefined>();
  const [messageFrom, setMessageFrom] = useState<string | undefined>();
  const [messageTo, setMessageTo] = useState<string | undefined>();
  const [valueFrom, setValueFrom] = useState<number | Date>(
    props.valueFrom || 0,
  );
  const [valueTo, setValueTo] = useState<number | Date>(props.valueTo || 0);

  const handleInputChangeFrom = (newValueFrom: number | Date) => {
    if (props.typeInput === "number" || props.typeInput === "currency") {
      if (typeof newValueFrom === "number") {
        if (newValueFrom < 0) {
          setStatusFrom("invalid" as IInputStatus);
          setMessageFrom("'From' value cannot be less than 0.");
          return;
        } else if (typeof valueTo === "number" && newValueFrom > valueTo) {
          setStatusFrom("invalid" as IInputStatus);
          setMessageFrom("'From' value cannot be greater than 'To' value.");
          return;
        } else {
          setStatusFrom(undefined);
          setMessageFrom(undefined);
        }
      }
    } else if (props.typeInput === "date" && newValueFrom instanceof Date) {
      if (valueTo instanceof Date && newValueFrom > valueTo) {
        setStatusFrom("invalid" as IInputStatus);
        setMessageFrom("'From' date cannot be later than 'To' date.");
        return;
      } else {
        setStatusFrom(undefined);
        setMessageFrom(undefined);
      }
    }

    setValueFrom(newValueFrom);
    props.handleInputChangeFrom(newValueFrom);
  };

  const handleInputChangeTo = (newValueTo: number | Date) => {
    if (props.typeInput === "number" || props.typeInput === "currency") {
      if (typeof newValueTo === "number") {
        if (newValueTo < 0) {
          setStatusTo("invalid" as IInputStatus);
          setMessageTo("'To' value cannot be less than 0.");
          return;
        } else if (typeof valueFrom === "number" && newValueTo < valueFrom) {
          setStatusTo("invalid" as IInputStatus);
          setMessageTo("'To' value cannot be less than 'From' value.");
          return;
        } else {
          setStatusTo(undefined);
          setMessageTo(undefined);
        }
      }
    } else if (props.typeInput === "date" && newValueTo instanceof Date) {
      if (valueFrom instanceof Date && newValueTo < valueFrom) {
        setStatusTo("invalid" as IInputStatus);
        setMessageTo("'To' date cannot be earlier than 'From' date.");
        return;
      } else {
        setStatusTo(undefined);
        setMessageTo(undefined);
      }
    }

    setValueTo(newValueTo);
    props.handleInputChangeTo(newValueTo);
  };

  return (
    <InputRange
      {...props}
      valueFrom={valueFrom}
      valueTo={valueTo}
      statusFrom={statusFrom}
      messageFrom={messageFrom}
      statusTo={statusTo}
      messageTo={messageTo}
      handleInputChangeFrom={handleInputChangeFrom}
      handleInputChangeTo={handleInputChangeTo}
    />
  );
};

export { InputRangeController };
