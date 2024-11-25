/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { ICondition, IInputStatus, IValue } from "../../types";
import { DecisionConditionRenderer } from "..";

interface IDecisionConditionRendererController {
  element: ICondition;
  onDecision?: (
    value: IValue | string[] | string | number | Date,
    nameCondition: string,
  ) => void;
  valueData: string | number | { from?: number; to?: number };
  message: { from?: string; to?: string };
  status: IInputStatus | { from?: IInputStatus; to?: IInputStatus };
  textValues: {
    selectOptions: string;
    selectOption: string;
    rangeMin: (label: string) => string;
    rangeMax: (label: string) => string;
  };
  type?: "decision" | "condition";
}

const DecisionConditionRendererController = ({
  element,
  onDecision,
  valueData,
  message,
  status,
  textValues,
  type = "decision",
}: IDecisionConditionRendererController) => {
  const [currentValue, setCurrentValue] = useState(valueData);

  const handleDecision = (value: any, nameCondition: string) => {
    console.log("Simulated Decision:", value, nameCondition);
    setCurrentValue(value);
    if (onDecision) onDecision(value, nameCondition);
  };

  return (
    <DecisionConditionRenderer
      element={element}
      onDecision={handleDecision}
      valueData={currentValue}
      message={message}
      status={status}
      textValues={textValues}
      type={type}
      name={""}
      nameLabel={""}
      form={undefined}
      value={currentValue}
      dataType={element.dataType}
    />
  );
};

export { DecisionConditionRendererController };
