import { IOption } from "@inubekit/inubekit";
import { IFieldStrategyNew } from "../DynamicFieldNew/types";

interface IDynamicField extends IFieldStrategyNew {
  type: string;
  listOfPossibleValues?: { list?: IOption[] };
}

export type { IDynamicField };
