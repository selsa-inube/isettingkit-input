import { StringSchema, NumberSchema } from "yup";

interface ICondition {
  valueUse: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  name: string;
  value?: string | string[] | number | IValue | undefined;
  dataType: (typeof ValueDataType)[keyof typeof ValueDataType];
  possibleValue?: IValue;
}

interface IDecision {
  endDate?: Date;
  valueUse: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  name: string;
  value?: string | string[] | number | IValue | undefined;
  possibleValue?: IValue;
  startDate?: Date;
  dataType: (typeof ValueDataType)[keyof typeof ValueDataType];
}

interface IRuleDecision {
  id?: string;
  endDate?: Date | string;
  valueUse: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  name: string;
  value?: string | string[] | number | IValue | undefined;
  possibleValue?: IValue;
  startDate?: Date | string;
  dataType: (typeof ValueDataType)[keyof typeof ValueDataType];
  conditions?: ICondition[];
  decision?: IDecision;
  decisions?: IDecision[];
}

interface IValue {
  list?: string[];
  listSelected?: string[];
  labelFrom?: string;
  labelTo?: string;
  from?: number | string | Date;
  to?: number | string | Date;
  value?: string | number | string[];
  messageFrom?: string;
  messageTo?: string;
  statusFrom?: IInputStatus;
  statusTo?: IInputStatus;
}

const ValueDataType = {
  ALPHABETICAL: "alphabetical",
  CURRENCY: "currency",
  DATE: "date",
  NUMBER: "number",
  PERCENTAGE: "percentage",
} as const;

const ValueHowToSetUp = {
  EQUAL: "equal",
  GREATER_THAN: "greater_than",
  LESS_THAN: "less_than",
  LIST_OF_VALUES: "list_of_values",
  LIST_OF_VALUES_MULTI: "list_of_values_multi",
  RANGE: "range",
} as const;

interface TypeDataOutput {
  schema: StringSchema | NumberSchema;
  value: string | number | { from: number; to: number } | undefined;
}

const status = ["invalid", "pending"] as const;
type IInputStatus = (typeof status)[number];

interface IRangeValue {
  from?: string | number | Date;
  to?: string | number | Date;
}
type IFormType = {
  [key: string]: string | number | IRangeValue;
};
declare const inputTypes: readonly [
  "alphabetical",
  "date",
  "currency",
  "number",
  "percentage",
];

type ITextfieldInputType = (typeof inputTypes)[number];

export { ValueDataType, ValueHowToSetUp };
export type {
  ITextfieldInputType,
  ICondition,
  IDecision,
  IFormType,
  IRuleDecision,
  IRangeValue,
  IValue,
  TypeDataOutput,
  IInputStatus,
};
