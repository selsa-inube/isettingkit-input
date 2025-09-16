interface IConditionNew {
  valueUse:
    | "RANGE"
    | "LIST_OF_VALUES_MULTI"
    | "EQUAL"
    | "GREATER_THAN"
    | "LESS_THAN";
  listOfPossibleValues?: { list?: string[] };
  conditionDataType: string;
  decisionDataType?: string;
  howToSetTheCondition: string;
  howToSetTheDecision: string;
  conditionName: string;
  ruleName: string;
  labelName: string;
  placeholder?: string;
}

export type { IConditionNew };
