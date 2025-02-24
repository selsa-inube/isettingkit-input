import { useState } from "react";
import { Textfield } from "@inubekit/inubekit";
import { Grid } from "@inubekit/inubekit";
import { currencyFormat, parseCurrencyString } from "../utils";
import { Date as DateInput, IDateStatus } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";
import { IInputStatus } from "../types";
import { Stack } from "@inubekit/inubekit";

interface IInputRange {
  handleInputChangeFrom: (valueFrom: number | Date) => void;
  handleInputChangeTo: (valueTo: number | Date) => void;
  id: string;
  typeInput: ITextfieldInputType;
  label: string;
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
    label,
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
    <Stack direction="column">
      <Text type="label" weight="bold" size="large" appearance="dark">
        {label}
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" margin="10px 0" gap="12px">
        <Stack alignItems="baseline" gap="8px">
          <Text type="body" size="large" appearance="dark">
            De
          </Text>
          {typeInput === "date" ? (
            <DateInput
              id={`${id}DateFrom`}
              value={formatValue(inputValueFrom, typeInput)}
              onChange={handleChangeFrom}
              required={required}
              status={statusFrom as unknown as IDateStatus}
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
              status={statusFrom as unknown as IDateStatus}
              onBlur={onBlur}
              placeholder={
                typeInput === "number"
                  ? "please type a number"
                  : "please type a text"
              }
            />
          )}
        </Stack>

        <Stack alignItems="baseline" gap="8px">
          <Text type="body" size="large" appearance="dark">
            a
          </Text>
          {typeInput === "date" ? (
            <DateInput
              id={`${id}DateTo`}
              value={formatValue(inputValueTo, typeInput)}
              onChange={handleChangeTo}
              required={required}
              status={statusTo as unknown as IDateStatus}
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
              status={statusTo as unknown as IDateStatus}
              onBlur={onBlur}
              placeholder={
                typeInput === "number"
                  ? "please type a number"
                  : "please type a text"
              }
            />
          )}
        </Stack>
      </Grid>
    </Stack>
  );
};

export { InputRange };
export type { IInputRange };
