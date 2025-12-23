import { useState } from "react";
import { InputRangeNew, IInputRangeNew } from "..";
import { IInputStatus } from "../../../Input/types/IInputStatus";

interface IInputRangeNewController
  extends Omit<
    IInputRangeNew,
    | "statusFrom"
    | "messageFrom"
    | "statusTo"
    | "messageTo"
    | "onBlur"
    | "onBlurFrom"
    | "onBlurTo"
  > {}

const InputRangeNewController = (props: IInputRangeNewController) => {
  const [statusFrom, setStatusFrom] = useState<IInputStatus | undefined>();
  const [statusTo, setStatusTo] = useState<IInputStatus | undefined>();
  const [messageFrom, setMessageFrom] = useState<string | undefined>();
  const [messageTo, setMessageTo] = useState<string | undefined>();

  const [valueFrom, setValueFrom] = useState<number | Date | string>(
    props.valueFrom ?? 0,
  );
  const [valueTo, setValueTo] = useState<number | Date | string>(
    props.valueTo ?? 0,
  );

  const [touchedFrom, setTouchedFrom] = useState(false);
  const [touchedTo, setTouchedTo] = useState(false);

  const isValidDate = (d: unknown): d is Date =>
    d instanceof Date && !Number.isNaN(d.getTime());

  const isEmptyForType = (
    val: number | Date | string,
    kind: typeof props.typeInput,
  ) => {
    if (kind === "date") return !isValidDate(val);
    if (typeof val === "string") return val.trim().length === 0;
    if (typeof val === "number") return Number.isNaN(val) || val === 0;
    return true;
  };

  const validateFrom = (
    nextFrom: number | Date | string,
    currentTo: number | Date | string,
  ) => {
    if (touchedFrom && isEmptyForType(nextFrom, props.typeInput)) {
      setStatusFrom("invalid" as IInputStatus);
      setMessageFrom("Please enter a value greater than 0.");
      return false;
    }

    if (
      (props.typeInput === "number" ||
        props.typeInput === "currency" ||
        props.typeInput === "monetary" ||
        props.typeInput === "percentage") &&
      typeof nextFrom === "number"
    ) {
      if (nextFrom < 0) {
        setStatusFrom("invalid" as IInputStatus);
        setMessageFrom("'From' value cannot be less than 0.");
        return false;
      }
      if (
        typeof currentTo === "number" &&
        currentTo !== 0 &&
        nextFrom > currentTo
      ) {
        setStatusFrom("invalid" as IInputStatus);
        setMessageFrom("'From' value cannot be greater than 'To' value.");
        return false;
      }
    }

    if (props.typeInput === "date" && isValidDate(nextFrom)) {
      if (isValidDate(currentTo) && nextFrom > currentTo) {
        setStatusFrom("invalid" as IInputStatus);
        setMessageFrom("'From' date cannot be later than 'To' date.");
        return false;
      }
    }

    setStatusFrom(undefined);
    setMessageFrom(undefined);
    return true;
  };

  const validateTo = (
    nextTo: number | Date | string,
    currentFrom: number | Date | string,
  ) => {
    if (touchedTo && isEmptyForType(nextTo, props.typeInput)) {
      setStatusTo("invalid" as IInputStatus);
      setMessageTo("Please enter a value greater than 0.");
      return false;
    }

    if (
      (props.typeInput === "number" ||
        props.typeInput === "currency" ||
        props.typeInput === "monetary" ||
        props.typeInput === "percentage") &&
      typeof nextTo === "number"
    ) {
      if (nextTo < 0) {
        setStatusTo("invalid" as IInputStatus);
        setMessageTo("'To' value cannot be less than 0.");
        return false;
      }
      if (
        typeof currentFrom === "number" &&
        currentFrom !== 0 &&
        nextTo < currentFrom
      ) {
        setStatusTo("invalid" as IInputStatus);
        setMessageTo("'To' value cannot be less than 'From' value.");
        return false;
      }
    }

    if (props.typeInput === "date" && isValidDate(nextTo)) {
      if (isValidDate(currentFrom) && nextTo < currentFrom) {
        setStatusTo("invalid" as IInputStatus);
        setMessageTo("'To' date cannot be earlier than 'From' date.");
        return false;
      }
    }

    setStatusTo(undefined);
    setMessageTo(undefined);
    return true;
  };

  const handleInputChangeFrom = (newValueFrom: number | Date | string) => {
    setValueFrom(newValueFrom);
    validateFrom(newValueFrom, valueTo);
    props.handleInputChangeFrom(newValueFrom);
  };

  const handleInputChangeTo = (newValueTo: number | Date | string) => {
    setValueTo(newValueTo);
    validateTo(newValueTo, valueFrom);
    props.handleInputChangeTo(newValueTo);
  };

  const handleBlurFrom = () => {
    setTouchedFrom(true);
    validateFrom(valueFrom, valueTo);
  };

  const handleBlurTo = () => {
    setTouchedTo(true);
    validateTo(valueTo, valueFrom);
  };

  return (
    <InputRangeNew
      {...props}
      valueFrom={valueFrom}
      valueTo={valueTo}
      statusFrom={statusFrom}
      messageFrom={messageFrom}
      statusTo={statusTo}
      messageTo={messageTo}
      handleInputChangeFrom={handleInputChangeFrom}
      handleInputChangeTo={handleInputChangeTo}
      onBlurFrom={handleBlurFrom}
      onBlurTo={handleBlurTo}
    />
  );
};

export { InputRangeNewController };
