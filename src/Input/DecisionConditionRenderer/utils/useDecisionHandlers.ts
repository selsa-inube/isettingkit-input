import { useState } from "react";
import {
  ICondition,
  IDecision,
  IFormType,
  IInputStatus,
  IValue,
} from "../../types";
import { IOptionItemChecked } from "../../SelectCheck/OptionItem";

interface IUseDecisionHandlers {
  element: IDecision | ICondition;
  onDecision: (
    value: IValue | string[] | string | number | Date,
    name: string,
  ) => void;
  valueData: string | number | { from?: number; to?: number };
  message: string | { from?: string; to?: string };
  status: IInputStatus | { from?: IInputStatus; to?: IInputStatus };
}

function useDecisionHandlers(props: IUseDecisionHandlers) {
  const { element, onDecision, valueData, message, status } = props;

  const name = element.name.replace(" ", "");
  const value = element.value;
  const dataType = element.dataType;
  const possibleValues = element.possibleValue;
  const nameLabel = element.name.split(/(?=[A-Z])/).join(" ");
  const [form, setForm] = useState<IFormType>({ [name]: valueData });

  const messageFrom =
    typeof message === "object" && "from" in message ? message.from : "";
  const messageTo =
    typeof message === "object" && "to" in message ? message.to : "";
  const statusFrom =
    typeof status === "object" && "from" in status
      ? status.from === "invalid"
        ? "invalid"
        : "pending"
      : "pending";

  const statusTo =
    typeof status === "object" && "to" in status
      ? status.to === "invalid"
        ? "invalid"
        : "pending"
      : "pending";

  const updateFormAndDecision = (
    updatedValue: string | number | { from?: number; to?: number } | string[],
    name: string,
  ) => {
    setForm((prev: IFormType) => ({
      ...prev,
      [name]: updatedValue,
    }));
    onDecision(updatedValue, name);
  };

  const handleSelectChange = (name: string, valueSelect: string) => {
    setForm({ ...form, [name]: valueSelect });
    onDecision([valueSelect], name);
  };

  const handleMultipleChoicesChange = (newOptions: IOptionItemChecked[]) => {
    const selectedValues = newOptions
      .filter((option) => option.checked)
      .map((option) => option.id);
    updateFormAndDecision(selectedValues, name);
  };

  const handleRangeChangeFrom = (valueFrom: number | Date) => {
    const updatedRange: { from?: number; to?: number } = {
      ...(typeof value === "object" && value !== null
        ? (value as { from?: number; to?: number })
        : {}),
      from: valueFrom instanceof Date ? valueFrom.getTime() : valueFrom,
    };
    updateFormAndDecision(updatedRange, name);
  };

  const handleRangeChangeTo = (valueTo: number | Date) => {
    const updatedRange: { from?: number; to?: number } = {
      ...(typeof value === "object" && value !== null
        ? (value as { from?: number; to?: number })
        : {}),
      to: valueTo instanceof Date ? valueTo.getTime() : valueTo,
    };
    updateFormAndDecision(updatedRange, name);
  };

  return {
    dataType,
    name,
    nameLabel,
    possibleValues,
    form,
    messageFrom,
    messageTo,
    statusFrom,
    statusTo,
    handleSelectChange,
    handleMultipleChoicesChange,
    handleRangeChangeFrom,
    handleRangeChangeTo,
  };
}

export { useDecisionHandlers };
export type { IUseDecisionHandlers };
