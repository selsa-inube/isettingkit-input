import { useEffect, useState } from "react";
import { MdOutlinePercent } from "react-icons/md";
import { Icon } from "@inubekit/icon";
import { Date as Datefield } from "@inubekit/date";
import { Textfield } from "@inubekit/input";

import { IInputStatus, ITextfieldInputType } from "../types";
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

  const [value, setValue] = useState(() => {
    if (type === "date" && typeof valueInput === "string") {
      return valueInput;
    }
    return valueInput;
  });

  useEffect(() => {
    if (type === "date" && typeof valueInput === "string") {
      setValue(valueInput);
    } else {
      setValue(valueInput);
    }
  }, [valueInput, type]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: string | number | Date = e.target.value;

    if (type === "currency") {
      newValue = parseCurrencyString(newValue as string);
    } else if (type === "number") {
      newValue = parseFloat(newValue);
    } else if (type === "date") {
      newValue = newValue || "";
    }

    setValue(newValue);
    handleChange(newValue);
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
          message={messageValidate}
          status={statusValidate as IInputStatus}
          onBlur={onBlur}
        />
      )}
      {type === "date" && (
        <Datefield
          id={name}
          label={label}
          onChange={onChange}
          value={value as string}
          fullwidth
          message={messageValidate}
          status={statusValidate as IInputStatus}
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
          message={messageValidate}
          status={statusValidate as IInputStatus}
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
          message={messageValidate}
          status={statusValidate as IInputStatus}
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
          status={statusValidate as IInputStatus}
          message={messageValidate}
          onBlur={onBlur}
        />
      )}
    </>
  );
};

export { DynamicField };
export type { IDynamicField };
