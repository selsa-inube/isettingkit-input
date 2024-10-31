import { DynamicField } from "../DynamicField";
import { InputRange } from "../InputRange";
import { Select } from "@inubekit/select";
import {
  ICondition,
  IDecision,
  IFormType,
  IInputStatus,
  IRangeMessages,
  IRangeValue,
  IValue,
  ValueHowToSetUp,
} from "../types";
import { useState } from "react";
import { MultipleChoices } from "../MultipleChoices";
import { IOptionItemChecked } from "../SelectCheck/OptionItem";

interface IDecisionConditionRenderer {
  element: IDecision | ICondition;
  onDecision: (value: IValue, nameCondition: string) => void;
  valueData:
    | string
    | number
    | { rangeFrom?: number | undefined; rangeTo?: number | undefined };
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
  const value = element.possibleValue;
  const nameLabel = element.name.split(/(?=[A-Z])/).join(" ");
  let valueRangeInput;
  const [form, setForm] = useState<IFormType>({ [name]: valueData });

  const messageFrom =
    typeof message === "object" && "rangeFrom" in message
      ? message.rangeFrom
      : "";
  const messageTo =
    typeof message === "object" && "rangeTo" in message ? message.rangeTo : "";
  const statusFrom =
    typeof status === "object" && "rangeFrom" in status ? "invalid" : "pending";
  const statusTo =
    typeof status === "object" && "rangeTo" in status ? "invalid" : "pending";

  const handleSelectChange = (name: string, valueSelect: string) => {
    setForm({ ...form, [name]: valueSelect });
    onDecision({ listSelected: [valueSelect], list: value!.list }, name);
  };

  const handleMultipleChoicesChange = (newOptions: IOptionItemChecked[]) => {
    const selectedValues = newOptions
      .filter((option) => option.checked)
      .map((option) => option.id)
      .join(", ");

    setForm({ ...form, [name]: selectedValues });
    onDecision({ listSelected: selectedValues.split(", ") }, name);
  };

  const handleRangeChangeFrom = (valueFrom: number | Date) => {
    setForm((prev) => ({
      ...prev,
      [name]: {
        ...((prev[name] as IRangeValue) || {}),
        rangeFrom: valueFrom,
      } as IRangeValue,
    }));
    onDecision({ ...value, rangeFrom: valueFrom }, name);
  };

  const handleRangeChangeTo = (valueTo: number | Date) => {
    setForm((prev) => ({
      ...prev,
      [name]: {
        ...((prev[name] as IRangeValue) || {}),
        rangeTo: valueTo,
      } as IRangeValue,
    }));
    onDecision({ ...value, rangeTo: valueTo }, name);
  };

  switch (element.howToSetUp) {
    case ValueHowToSetUp.LIST_OF_VALUES:
      return (
        <Select
          onChange={handleSelectChange}
          id={name}
          name={name}
          value={form[name] as string}
          options={
            Array.isArray(value!.list)
              ? value!.list.map((item) => ({
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
            Array.isArray(value!.list)
              ? value!.list.map((item) => ({
                  id: item,
                  label: item,
                  checked: value!.listSelected?.includes(item),
                }))
              : []
          }
          placeholderSelect={textValues.selectOptions}
          message={String(message)}
        />
      );

    case ValueHowToSetUp.RANGE:
      valueRangeInput = valueData as {
        rangeFrom?: number | undefined;
        rangeTo?: number | undefined;
      };
      return (
        <InputRange
          handleInputChangeFrom={handleRangeChangeFrom}
          handleInputChangeTo={handleRangeChangeTo}
          id={name}
          labelFrom={textValues.rangeMin(nameLabel)}
          labelTo={textValues.rangeMax(nameLabel)}
          typeInput={element.typeData}
          valueFrom={valueRangeInput.rangeFrom}
          valueTo={valueRangeInput.rangeTo}
          messageFrom={messageFrom}
          statusFrom={statusFrom}
          messageTo={messageTo}
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
            onDecision({ value: value }, name);
          }}
          type={element.typeData}
          valueInput={valueData as string}
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
