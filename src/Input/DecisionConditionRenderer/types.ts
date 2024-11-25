/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICondition, IDecision, IValue, ValueDataType } from "../types";
import { ReactNode } from "react";
import { IRangeMessages } from "../utils";

interface IStrategy {
  element: IDecision | ICondition;
  name: string;
  nameLabel: string;
  form?: any;
  value?: any;
  valueData?: any;
  possibleValues?: IValue | undefined;
  message?: string | IRangeMessages;
  status?: any;
  textValues: any;
  type?: "decision" | "condition";
  dataType?: (typeof ValueDataType)[keyof typeof ValueDataType];
  onDecision?: (value: any, name: string) => void;
  handleRangeChangeFrom?: (value: number | Date) => void;
  handleRangeChangeTo?: (value: number | Date) => void;
  handleSelectChange?: (name: string, value: string) => void;
  handleMultipleChoicesChange?: (newOptions: any) => void;
}

type IFieldStrategy = {
  render: (props: IStrategy) => ReactNode;
};

type IStrategyMap = Record<string, IFieldStrategy>;

export type { IFieldStrategy, IStrategyMap, IStrategy };
