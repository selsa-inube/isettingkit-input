import { useState } from "react";
import { Textfield } from "@inubekit/input";
import { Grid } from "@inubekit/grid";
import { currencyFormat, parseCurrencyString } from "../utils";
import { IInputStatus } from "../types";

interface IInputRange {
  handleInputChangeFrom: (valueFrom: number) => void;
  handleInputChangeTo: (valueTo: number) => void;
  id: string;
  labelFrom: string;
  labelTo: string;
  typeInput: ITextfieldInputType;
  required?: boolean;
  valueFrom?: number;
  valueTo?: number;
  message?: string;
  status?: string;
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
    labelFrom,
    labelTo,
    typeInput,
    required = false,
    valueFrom = 0,
    valueTo = 0,
    message,
    status,
    onBlur,
  } = props;

  const [inputValueFrom, setInputValueFrom] = useState(valueFrom),
    [inputValueTo, setInputValueTo] = useState(valueTo);

  const handleChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueFrom =
      typeInput === "currency"
        ? parseCurrencyString(e.target.value)
        : Number(e.target.value);
    setInputValueFrom(valueFrom);
    handleInputChangeFrom(valueFrom);
  };

  const handleChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueTo =
      typeInput === "currency"
        ? parseCurrencyString(e.target.value)
        : Number(e.target.value);
    setInputValueTo(valueTo);
    handleInputChangeTo(valueTo);
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" margin="10px 0" gap="12px">
      <Textfield
        id={`${id}TextFieldFrom`}
        label={labelFrom}
        onChange={handleChangeFrom}
        required={required}
        size="compact"
        fullwidth
        type={typeInput === "number" ? "number" : "text"}
        value={
          typeInput === "currency"
            ? currencyFormat(inputValueFrom)
            : inputValueFrom
        }
        message={message}
        status={status as IInputStatus}
        onBlur={onBlur}
      />
      <Textfield
        id={`${id}TextFieldTo`}
        label={labelTo}
        onChange={handleChangeTo}
        required={required}
        size="compact"
        type={typeInput === "number" ? "number" : "text"}
        fullwidth
        value={
          typeInput === "currency" ? currencyFormat(inputValueTo) : inputValueTo
        }
        message={message}
        status={status as IInputStatus}
        onBlur={onBlur}
      />
    </Grid>
  );
};

export { InputRange };
export type { IInputRange };
