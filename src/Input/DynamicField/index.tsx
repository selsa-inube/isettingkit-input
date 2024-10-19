import { useState } from "react";
import { MdOutlinePercent } from "react-icons/md";
import { Icon } from "@inubekit/icon";
import { Date } from "@inubekit/date";
import { Textfield } from "@inubekit/input";

import { IInputStatus } from "../types";
import { currencyFormat, parseCurrencyString } from "../utils";

interface IDynamicField {
  type: ITextfieldInputType;
  name: string;
  label: string;
  valueInput: string | number;
  handleChange: (value: string | number) => void;
  messageValidate?: string;
  statusValidate?: string;
  onBlur?: () => void;
}

export declare type ITextfieldInputType = (typeof inputTypes)[number];

declare const inputTypes: readonly [
  "alphabetical",
  "date",
  "currency",
  "number",
  "percentage",
];

const DynamicField = (props: IDynamicField) => {
  const {
    type,
    name,
    label,
    valueInput,
    handleChange,
    messageValidate,
    statusValidate,
    onBlur,
  } = props;

  const [value, setValue] = useState(valueInput),
    [status, setStatus] = useState<IInputStatus>(
      statusValidate as IInputStatus,
    ),
    [message, setMessage] = useState<string>(messageValidate as string);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = e.target.value;
    if (type === "percentage") {
      if (Number(valueInput) < 0 || Number(valueInput) > 100) {
        setStatus("invalid");
        setMessage("El porcentaje debe estar entre 0 y 100");
        return;
      }
      setStatus("pending");
      setMessage("");
    }
    if (type === "currency") {
      setValue(parseCurrencyString(valueInput as string));
      handleChange(value);
      return;
    }
    setValue(valueInput);
    handleChange(value);
  };
  return (
    <>
      {type === "number" && (
        <Textfield
          id={name}
          label={label}
          onChange={onChange}
          type="number"
          value={value}
          fullwidth
          message={message}
          status={status}
          onBlur={onBlur}
        />
      )}
      {type === "date" && (
        <Date
          id={name}
          label={label}
          onChange={onChange}
          value={value}
          fullwidth
          message={message}
          status={status}
          onBlur={onBlur}
        />
      )}
      {type === "alphabetical" && (
        <Textfield
          id={name}
          label={label}
          onChange={onChange}
          type="text"
          value={value}
          fullwidth
          message={message}
          status={status}
          onBlur={onBlur}
        />
      )}
      {type === "currency" && (
        <Textfield
          id={name}
          label={label}
          onChange={onChange}
          type="text"
          value={currencyFormat(value as number)}
          fullwidth
          message={message}
          status={status}
          onBlur={onBlur}
        />
      )}
      {type === "percentage" && (
        <Textfield
          id={name}
          label={label}
          onChange={onChange}
          type="number"
          value={value}
          fullwidth
          iconAfter={
            <Icon appearance="dark" icon={<MdOutlinePercent />} size="18px" />
          }
          status={status}
          message={message}
          onBlur={onBlur}
        />
      )}
    </>
  );
};

export { DynamicField };
export type { IDynamicField };
