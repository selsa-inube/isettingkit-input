import { NumberSchema, StringSchema } from "yup";

interface ICondition {
  conditionDataType: (typeof ValueDataType)[keyof typeof ValueDataType];
  hidden?: boolean;
  conditionName: string;
  listOfPossibleValues?: IValue;
  switchPlaces?: boolean;
  value?: string | string[] | number | IValue | undefined;
  howToSetTheCondition: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
}

interface IDecision {
  decisionDataType: (typeof ValueDataType)[keyof typeof ValueDataType];
  validUntil?: Date;
  labelName: string;
  ruleDataType: (typeof ValueDataType)[keyof typeof ValueDataType];
  ruleName: string;
  listOfPossibleValues?: IValue;
  effectiveFrom?: Date;
  value?: string | string[] | number | IValue | undefined;
  howToSetTheDecision: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
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
  businessRuleId?: string;
  conditionDataType?: (typeof ValueDataType)[keyof typeof ValueDataType];
  conditionName?: string;
  conditionThatEstablishesTheDecision?: ICondition[];
  decision?: IDecision;
  decisions?: IDecision[];
  decisionDataType?: (typeof ValueDataType)[keyof typeof ValueDataType];
  decisionId?: string;
  descriptionOfChange?: string;
  descriptionUse?: string;
  effectiveFrom?: Date | string;
  howToSetTheCondition?: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  howToSetTheDecision?: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  labelName?: string;
  listOfPossibleValues?: IValue;
  ruleDataType?: (typeof ValueDataType)[keyof typeof ValueDataType];
  ruleName?: string;
  transactionOperation?: string;
  validUntil?: Date | string;
  value?: string | string[] | number | IValue | undefined;
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
  EQUAL: "EqualTo",
  GREATER_THAN: "GreaterThan",
  LESS_THAN: "LessThan",
  LIST_OF_VALUES: "ListOfValues",
  LIST_OF_VALUES_MULTI: "ListOfValuesMulti",
  RANGE: "Range",
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
