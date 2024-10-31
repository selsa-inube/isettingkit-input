import { StringSchema, NumberSchema } from "yup";

interface ICondition {
  description: string;
  howToSetUp: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  name: string;
  possibleValue?: IValue;
  value?: string | string[] | number | IValue | undefined;
  typeData: (typeof ValueDataType)[keyof typeof ValueDataType];
}

interface IDecision {
  description: string;
  endDate?: Date;
  howToSetUp: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  name: string;
  possibleValue?: IValue;
  value?: string | string[] | number | IValue | undefined;
  startDate?: Date;
  typeData: (typeof ValueDataType)[keyof typeof ValueDataType];
}

interface IRuleDecision {
  id?: string;
  conditions?: ICondition[];
  decision?: IDecision;
  decisions?: IDecision[];
  startDate?: Date;
  endDate?: Date;
}

interface IValue {
  list?: string[];
  listSelected?: string[];
  labelFrom?: string;
  labelTo?: string;
  rangeFrom?: number | string | Date;
  rangeTo?: number | string | Date;
  value?: string | number;
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
  value: string | number | { rangeFrom: number; rangeTo: number } | undefined;
}

const status = ["invalid", "pending"] as const;
type IInputStatus = (typeof status)[number];

interface IRangeValue {
  rangeFrom?: number | Date;
  rangeTo?: number | Date;
}
type IFormType = {
  [key: string]: string | number | IRangeValue;
};
export { ValueDataType, ValueHowToSetUp };

interface IRangeMessages {
  rangeFrom?: string;
  rangeTo?: string;
}

export type {
  ICondition,
  IDecision,
  IFormType,
  IRuleDecision,
  IRangeValue,
  IRangeMessages,
  IValue,
  TypeDataOutput,
  IInputStatus,
};
