import { Select } from "@inubekit/select";
import { useState } from "react";

import {
  ICondition,
  IDecision,
  IFormType,
  IInputStatus,
  IValue,
  ValueHowToSetUp,
} from "../types";
import { IRangeMessages } from "../utils";
import { MultipleChoices } from "../MultipleChoices";
import { InputRange } from "../InputRange";
import { DynamicField } from "../DynamicField";
import { IOptionItemChecked } from "../SelectCheck/OptionItem";

interface IDecisionConditionRenderer {
  element: IDecision | ICondition;
  onDecision: (
    value: IValue | string[] | string | number | Date,
    nameCondition: string,
  ) => void;
  valueData:
    | string
    | number
    | { from?: number | undefined; to?: number | undefined };
  message: string | IRangeMessages;
  status: IInputStatus | IRangeMessages;
  textValues: {
    selectOptions: string;
    selectOption: string;
    rangeMin: (label: string) => string;
    rangeMax: (label: string) => string;
  };
}

const DecisionConditionRenderer = (props: IDecisionConditionRenderer) => {
  const { element, onDecision, valueData, message, status, textValues } = props;
  const name = element.name.replace(" ", "");
  const value = element.value;
  const possibleValues = element.possibleValue;
  const nameLabel = element.name.split(/(?=[A-Z])/).join(" ");
  let valueRangeInput;
  const [form, setForm] = useState<IFormType>({ [name]: valueData });

  const messageFrom =
    typeof message === "object" && "from" in message ? message.from : "";
  const messageTo =
    typeof message === "object" && "to" in message ? message.to : "";
  const statusFrom =
    typeof status === "object" && "from" in status && status.from !== ""
      ? "invalid"
      : "pending";
  const statusTo =
    typeof status === "object" && "to" in status && status.to !== ""
      ? "invalid"
      : "pending";

  const handleSelectChange = (name: string, valueSelect: string) => {
    setForm({ ...form, [name]: valueSelect });
    onDecision([valueSelect], name);
  };

  const handleMultipleChoicesChange = (newOptions: IOptionItemChecked[]) => {
    const selectedValues = newOptions
      .filter((option) => option.checked)
      .map((option) => option.id)
      .join(", ");

    setForm({ ...form, [name]: selectedValues });
    onDecision(selectedValues.split(", "), name);
  };

  const handleRangeChangeFrom = (valueFrom: number | Date) => {
    setForm((prev) => ({
      ...prev,
      [name]: {
        ...(typeof prev[name] === "object" && prev[name] ? prev[name] : {}),
        rangeFrom: valueFrom,
      },
    }));
    onDecision(
      {
        ...(typeof value === "object" && value !== null ? value : {}),
        from: valueFrom,
      },
      name,
    );
  };

  const handleRangeChangeTo = (valueTo: number | Date) => {
    setForm((prev) => ({
      ...prev,
      [name]: {
        ...(typeof prev[name] === "object" && prev[name] ? prev[name] : {}),
        to: valueTo,
      },
    }));
    onDecision(
      {
        ...(typeof value === "object" && value !== null ? value : {}),
        to: valueTo,
      },
      name,
    );
  };

  switch (element.valueUse) {
    case ValueHowToSetUp.LIST_OF_VALUES:
      return (
        <Select
          onChange={handleSelectChange}
          id={name}
          name={name}
          label={nameLabel}
          value={form[name] as string}
          options={
            Array.isArray(possibleValues?.list)
              ? possibleValues?.list.map((item) => ({
                  id: item,
                  label: item,
                  value: item,
                }))
              : []
          }
          message={String(message)}
          fullwidth
        />
      );

    case ValueHowToSetUp.LIST_OF_VALUES_MULTI:
      return (
        <MultipleChoices
          id={name}
          labelSelect={nameLabel}
          labelSelected={textValues.selectOption}
          onHandleSelectCheckChange={handleMultipleChoicesChange}
          options={
            Array.isArray(possibleValues?.list)
              ? possibleValues?.list.map((item) => ({
                  id: item,
                  label: item,
                  checked: Array.isArray(value) && value.includes(item),
                }))
              : []
          }
          placeholderSelect={textValues.selectOptions}
          message={String(message)}
        />
      );

    case ValueHowToSetUp.RANGE:
      valueRangeInput = valueData as {
        from?: number | undefined;
        to?: number | undefined;
      };
      return (
        <InputRange
          handleInputChangeFrom={handleRangeChangeFrom}
          handleInputChangeTo={handleRangeChangeTo}
          id={name}
          typeInput={element.dataType}
          valueFrom={valueRangeInput.from}
          valueTo={valueRangeInput.to}
          messageFrom={messageFrom as string}
          statusFrom={statusFrom}
          messageTo={messageTo as string}
          statusTo={statusTo}
        />
      );

    case ValueHowToSetUp.GREATER_THAN:
    case ValueHowToSetUp.LESS_THAN:
    case ValueHowToSetUp.EQUAL:
      return (
        <DynamicField
          label={nameLabel}
          name={name}
          handleChange={(value) => {
            onDecision(value, name);
          }}
          type={element.dataType}
          valueInput={valueData as string | number}
          messageValidate={String(message)}
          statusValidate={status as IInputStatus}
        />
      );

    default:
      return null;
  }
};

export { DecisionConditionRenderer };
export type { IDecisionConditionRenderer };
