/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { IOption, Select, Text, Stack } from "@inubekit/inubekit";
import { parseCurrencyString, parsePercentageString } from "../utils";
import { IInputStatus } from "../types/IInputStatus";
import { DynamicFieldNew } from "../DynamicFieldNew";

interface IInputRangeNew {
  condition?: boolean;
  handleInputChangeFrom: (valueFrom: number | Date | string) => void;
  handleInputChangeTo: (valueTo: number | Date | string) => void;
  id: string;
  typeInput: ITextfieldInputType;
  label: string;
  required?: boolean;
  valueFrom?: number | Date | string;
  valueTo?: number | Date | string;
  messageFrom?: string;
  messageTo?: string;
  statusFrom?: IInputStatus;
  statusTo?: IInputStatus;
  onBlur?: () => void;
  listOfPossibleValues?: { list?: IOption[] };
  onBlurFrom?: () => void;
  onBlurTo?: () => void;
}

declare const inputTypes: readonly [
  "alphabetical",
  "date",
  "currency",
  "number",
  "monetary",
  "percentage",
];

declare type ITextfieldInputType = (typeof inputTypes)[number];

const InputRangeNew = (props: IInputRangeNew) => {
  const {
    condition,
    handleInputChangeFrom,
    handleInputChangeTo,
    id,
    typeInput,
    label,
    required = false,
    valueFrom = "",
    valueTo = "",
    messageFrom,
    messageTo,
    statusFrom,
    statusTo,
    onBlur,
    onBlurFrom,
    onBlurTo,
    listOfPossibleValues,
  } = props;

  const [inputValueFrom, setInputValueFrom] = useState(valueFrom);
  const [inputValueTo, setInputValueTo] = useState(valueTo);

  const updateFrom = (raw: string | number | Date) => {
    let valueFrom: number | Date | string;

    if (typeInput === "currency" || typeInput === "monetary") {
      valueFrom = parseCurrencyString(String(raw));
    } else if (typeInput === "date") {
      valueFrom = raw instanceof Date ? raw : new Date(String(raw));
    } else if (typeInput === "percentage") {
      const parsed = parsePercentageString(String(raw));
      setInputValueFrom(String(raw));
      handleInputChangeFrom(parsed);
      return;
    } else if (typeInput === "number") {
      valueFrom = Number(raw);
    } else {
      valueFrom = String(raw);
    }

    setInputValueFrom(valueFrom);
    handleInputChangeFrom(valueFrom);
  };

  const updateTo = (raw: string | number | Date) => {
    let valueTo: number | Date | string;

    if (typeInput === "currency" || typeInput === "monetary") {
      valueTo = parseCurrencyString(String(raw));
    } else if (typeInput === "date") {
      valueTo = raw instanceof Date ? raw : new Date(String(raw));
    } else if (typeInput === "percentage") {
      const parsed = parsePercentageString(String(raw));
      setInputValueTo(String(raw));
      handleInputChangeTo(parsed);
      return;
    } else if (typeInput === "number") {
      valueTo = Number(raw);
    } else {
      valueTo = String(raw);
    }

    setInputValueTo(valueTo);
    handleInputChangeTo(valueTo);
  };

  const handleChangeSelect = (name: string, value: string) => {
    if (name === `${id}SelectFrom`) {
      setInputValueFrom(value);
      handleInputChangeFrom(value);
    }
    if (name === `${id}SelectTo`) {
      setInputValueTo(value);
      handleInputChangeTo(value);
    }
  };

  // const formatValue = (
  //   value: number | Date | string,
  //   type: ITextfieldInputType,
  // ) => {
  //   if (type === "currency" || type === "monetary") {
  //     return currencyFormat(value as number);
  //   }

  //   if (type === "date" && value instanceof Date) {
  //     return value.toISOString().split("T")[0];
  //   }

  //   if (type === "percentage") {
  //     if (typeof value === "number") return String(value);
  //     return (value ?? "") as string;
  //   }

  //   if (typeof value === "number") return value;
  //   return value ?? "";
  // };
  const formatValue = (
    value: number | Date | string,
    type: ITextfieldInputType,
  ) => {
    if (type === "date" && value instanceof Date) {
      return value.toISOString().split("T")[0];
    }

    if (typeof value === "number") return value;

    return value ?? "";
  };

  const blurFrom = onBlurFrom ?? onBlur;
  const blurTo = onBlurTo ?? onBlur;

  return (
    <Stack
      alignItems={messageFrom ? "baseline" : "center"}
      gap="16px"
      width="100%"
    >
      <Text
        type={condition ? "body" : "title"}
        weight={condition ? "normal" : "bold"}
        size="medium"
        appearance={
          messageFrom || messageTo ? "danger" : condition ? "dark" : "primary"
        }
      >
        {label}
      </Text>

      <Stack gap="16px" alignItems={messageFrom ? "baseline" : "center"}>
        <Stack
          alignItems={messageFrom || messageTo ? "baseline" : "center"}
          gap="8px"
        >
          {!condition && (
            <Text
              type="title"
              size="medium"
              appearance="gray"
              textAlign="center"
              weight="bold"
            >
              De
            </Text>
          )}

          {listOfPossibleValues ? (
            <Select
              id={`${id}SelectFrom`}
              options={listOfPossibleValues.list as IOption[]}
              value={String(inputValueFrom)}
              onChange={handleChangeSelect}
              message={messageFrom}
              fullwidth
              name={`${id}SelectFrom`}
              invalid={statusFrom === ("invalid" as IInputStatus)}
              onBlur={blurFrom}
            />
          ) : (
            <DynamicFieldNew
              type={typeInput}
              name={`${id}DynamicFieldFrom`}
              label=""
              placeholder={
                typeInput === "number" ||
                typeInput === "currency" ||
                typeInput === "monetary" ||
                typeInput === "percentage"
                  ? "por favor escribe un numero"
                  : "por favor escribe un texto"
              }
              value={formatValue(inputValueFrom, typeInput) as any}
              required={required}
              onChange={(_name: string, value: any) => {
                updateFrom(value as string | number);
              }}
              messageValidate={messageFrom}
              statusValidate={statusFrom}
              onBlur={blurFrom}
            />
          )}
        </Stack>

        <Text
          type={condition ? "body" : "title"}
          size="medium"
          appearance={condition ? "dark" : "gray"}
          weight={condition ? "normal" : "bold"}
          textAlign="center"
        >
          {condition ? "y" : "A"}
        </Text>

        <Stack
          alignItems={messageFrom || messageTo ? "baseline" : "center"}
          gap="8px"
        >
          {listOfPossibleValues ? (
            <Select
              id={`${id}SelectTo`}
              options={listOfPossibleValues.list as IOption[]}
              value={String(inputValueTo)}
              onChange={handleChangeSelect}
              message={messageTo}
              fullwidth
              name={`${id}SelectTo`}
              invalid={statusTo === ("invalid" as IInputStatus)}
              onBlur={blurTo}
            />
          ) : (
            <DynamicFieldNew
              type={typeInput}
              name={`${id}DynamicFieldTo`}
              label=""
              placeholder={
                typeInput === "number" ||
                typeInput === "currency" ||
                typeInput === "monetary" ||
                typeInput === "percentage"
                  ? "por favor escribe un numero"
                  : "por favor escribe un texto"
              }
              value={formatValue(inputValueTo, typeInput) as any}
              required={required}
              onChange={(_name: string, value: any) => {
                updateTo(value as string | number);
              }}
              messageValidate={messageTo}
              statusValidate={statusTo}
              onBlur={blurTo}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export { InputRangeNew };
export type { IInputRangeNew };
