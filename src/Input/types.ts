import { StringSchema, NumberSchema } from "yup";

interface ICondition {
  description: string;
  howToSetUp: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  label: string;
  name: string;
  possibleValue: IValue;
  value?: string | number | { rangeFrom?: number | undefined; rangeTo?: number | undefined | IValue};
  typeData: (typeof ValueDataType)[keyof typeof ValueDataType];
}

interface IDecision {
  description: string;
  endDate?: Date;
  howToSetUp: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  label: string;
  name: string;
  possibleValue: IValue;
  value?: string | number | { rangeFrom?: number | undefined; rangeTo?: number | undefined | IValue};
  startDate: Date;
  typeData: (typeof ValueDataType)[keyof typeof ValueDataType];
}

interface IRuleDecision {
  conditions?: ICondition[];
  decision: IDecision;
}

interface IValue {
  list?: string[];
  listSelected?: string[];
  rangeFrom?: number;
  rangeTo?: number;
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
