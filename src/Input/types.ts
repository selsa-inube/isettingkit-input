import { NumberSchema, StringSchema } from "yup";

interface ICondition {
  dataType: (typeof ValueDataType)[keyof typeof ValueDataType];
  hidden?: boolean;
  name: string;
  possibleValue?: IValue;
  switchPlaces?: boolean;
  value?: string | string[] | number | IValue | undefined;
  valueUse: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
}

interface IDecision {
  dataType: (typeof ValueDataType)[keyof typeof ValueDataType];
  endDate?: Date;
  name: string;
  possibleValue?: IValue;
  startDate?: Date;
  value?: string | string[] | number | IValue | undefined;
  valueUse: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
}

interface IFormType {
  [key: string]: string | number | string[] | { from?: number; to?: number };
}

interface IInputStatus {
  from?: string | number | Date;
  to?: string | number | Date;
}

interface IRangeValue {
  from?: string | number | Date;
  to?: string | number | Date;
}

interface IRuleDecision {
  conditions?: ICondition[];
  dataType: (typeof ValueDataType)[keyof typeof ValueDataType];
  decision?: IDecision;
  decisions?: IDecision[];
  endDate?: Date | string;
  id?: string;
  name: string;
  possibleValue?: IValue;
  startDate?: Date | string;
  value?: string | string[] | number | IValue | undefined;
  valueUse: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
}

interface ITextfieldInputType {
  [key: string]: string | number | string[] | { from?: number; to?: number };
}

interface IValue {
  from?: number | string | Date;
  labelFrom?: string;
  labelTo?: string;
  list?: string[];
  listSelected?: string[];
  messageFrom?: string;
  messageTo?: string;
  statusFrom?: IInputStatus;
  statusTo?: IInputStatus;
  to?: number | string | Date;
  value?: string | number | string[];
}

interface TypeDataOutput {
  schema: StringSchema | NumberSchema;
  value: string | number | { from: number; to: number } | undefined;
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

declare const inputTypes: readonly [
  "alphabetical",
  "currency",
  "date",
  "number",
  "percentage",
];

declare type IInputType = (typeof inputTypes)[number];
export { ValueDataType, ValueHowToSetUp };
export type {
  ICondition,
  IDecision,
  IInputType,
  IFormType,
  IInputStatus,
  IRangeValue,
  IRuleDecision,
  ITextfieldInputType,
  IValue,
  TypeDataOutput,
};
