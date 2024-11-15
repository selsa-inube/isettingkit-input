import { useState } from "react";
import { Textfield } from "@inubekit/input";
import { Grid } from "@inubekit/grid";
import { currencyFormat, parseCurrencyString } from "../utils";
import { Date as DateInput } from "@inubekit/date";
import { Text } from "@inubekit/text";
import { IInputStatus } from "../types";
import { Stack } from "@inubekit/stack";

interface IInputRange {
  handleInputChangeFrom: (valueFrom: number | Date) => void;
  handleInputChangeTo: (valueTo: number | Date) => void;
  id: string;
  typeInput: ITextfieldInputType;
  required?: boolean;
  valueFrom?: number | Date;
  valueTo?: number | Date;
  messageFrom?: string;
  messageTo?: string;
  statusFrom?: IInputStatus;
  statusTo?: IInputStatus;
  onBlur?: () => void;
}

declare type ITextfieldInputType = (typeof inputTypes)[number];

declare const inputTypes: readonly [
  "alphabetical",
  "date",
  "currency",
  "number",
  "percentage",
];

const InputRange = (props: IInputRange) => {
  const {
    handleInputChangeFrom,
    handleInputChangeTo,
    id,
    typeInput,
    required = false,
    valueFrom = 0,
    valueTo = 0,
    messageFrom,
    messageTo,
    statusFrom,
    statusTo,
    onBlur,
  } = props;

  const [inputValueFrom, setInputValueFrom] = useState(valueFrom);
  const [inputValueTo, setInputValueTo] = useState(valueTo);

  const handleChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valueFrom: number | Date;

    if (typeInput === "currency") {
      valueFrom = parseCurrencyString(e.target.value);
    } else if (typeInput === "date") {
      valueFrom = new Date(e.target.value);
    } else {
      valueFrom = Number(e.target.value);
    }

    setInputValueFrom(valueFrom);
    handleInputChangeFrom(valueFrom);
  };

  const handleChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valueTo: number | Date;

    if (typeInput === "currency") {
      valueTo = parseCurrencyString(e.target.value);
    } else if (typeInput === "date") {
      valueTo = new Date(e.target.value);
    } else {
      valueTo = Number(e.target.value);
    }

    setInputValueTo(valueTo);
    handleInputChangeTo(valueTo);
  };

  const formatValue = (value: number | Date, type: ITextfieldInputType) => {
    if (type === "currency") return currencyFormat(value as number);
    if (type === "date" && value instanceof Date)
      return value.toISOString().split("T")[0];
    return Number(value);
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" margin="10px 0" gap="12px">
      <Stack alignItems="center" gap="8px">
        <Text type="body" size="large" appearance="dark">
          De
        </Text>
        {typeInput === "date" ? (
          <DateInput
            id={`${id}DateFrom`}
            value={formatValue(inputValueFrom, typeInput)}
            onChange={handleChangeFrom}
            required={required}
            status={statusFrom}
            message={messageFrom}
            onBlur={onBlur}
          />
        ) : (
          <Textfield
            id={`${id}TextFieldFrom`}
            onChange={handleChangeFrom}
            required={required}
            size="compact"
            fullwidth
            type={typeInput === "number" ? "number" : "text"}
            value={formatValue(inputValueFrom, typeInput)}
            message={messageFrom}
            status={statusFrom}
            onBlur={onBlur}
          />
        )}
      </Stack>

      <Stack alignItems="center" gap="8px">
        <Text type="body" size="large" appearance="dark">
          a
        </Text>
        {typeInput === "date" ? (
          <DateInput
            id={`${id}DateTo`}
            value={formatValue(inputValueTo, typeInput)}
            onChange={handleChangeTo}
            required={required}
            status={statusTo}
            message={messageTo}
            onBlur={onBlur}
          />
        ) : (
          <Textfield
            id={`${id}TextFieldTo`}
            onChange={handleChangeTo}
            required={required}
            size="compact"
            fullwidth
            type={typeInput === "number" ? "number" : "text"}
            value={formatValue(inputValueTo, typeInput)}
            message={messageTo}
            status={statusTo}
            onBlur={onBlur}
          />
        )}
      </Stack>
    </Grid>
  );
};

export { InputRange };
export type { IInputRange };
