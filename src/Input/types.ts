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
  rangeFrom?: number | string;
  rangeTo?: number | string;
  value?: string | number;
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

export { ValueDataType, ValueHowToSetUp };
export type {
  ICondition,
  IDecision,
  IRuleDecision,
  IValue,
  TypeDataOutput,
  IInputStatus,
};
