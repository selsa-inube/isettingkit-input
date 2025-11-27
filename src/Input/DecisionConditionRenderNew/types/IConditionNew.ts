import { IOption } from "@inubekit/inubekit";
import { IValue } from "../../../Input/types/IValue";

interface IConditionNew {
  groupKey?: string;
  valueUse:
    | "RANGE"
    | "LIST_OF_VALUES_MULTI"
    | "EQUAL"
    | "GREATER_THAN"
    | "LESS_THAN";
  listOfPossibleValues?: { list?: IOption[] };
  conditionDataType: string;
  decisionDataType?: string;
  howToSetTheCondition: string;
  howToSetTheDecision: string;
  conditionName: string;
  ruleName: string;
  labelName: string;
  placeholder?: string;
  value?: string | string[] | number | IValue | undefined;
}

export type { IConditionNew };
