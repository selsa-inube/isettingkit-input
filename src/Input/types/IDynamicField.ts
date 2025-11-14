import { IFieldStrategyNew } from "../DynamicFieldNew/types";

interface IDynamicField extends IFieldStrategyNew {
  type: string;
  listOfPossibleValues?: { list?: string[] };
}

export type { IDynamicField };
