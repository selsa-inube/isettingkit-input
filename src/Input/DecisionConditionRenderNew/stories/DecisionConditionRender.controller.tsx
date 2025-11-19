import { useFormik } from "formik";
import { DecisionConditionRenderNew } from "..";

import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";
import { ValueDataType } from "../../../Input/types/ValueDataType";
import { ValueHowToSetUp } from "../../../Input/types/ValueHowToSetUp";

const DecisionConditionRenderControllerNew = () => {
  const condition: IConditionNew = {
    labelName: "Reciprocidad de ahorro",
    conditionName: "ReciprocidadDeAhorro",
    decisionDataType: ValueDataType.CURRENCY,
    conditionDataType: ValueDataType.CURRENCY,
    howToSetTheCondition: ValueHowToSetUp.RANGE,
    valueUse: "RANGE",
    howToSetTheDecision: "",
    ruleName: "",
    listOfPossibleValues: {
      list: [
        "999900321",
        "4",
        "3",
        "2",
        "1",
        "3",
        "99",
        "4",
        "10000",
        "100000",
      ],
    },
    value: ["10000"],
    groupKey: "group-primary",
  };

  const formik = useFormik({
    initialValues: {
      value: ["2222"],
    },
    onSubmit: () => {},
  });

  return (
    <DecisionConditionRenderNew
      condition={condition}
      formik={formik as unknown as IFormikTypeNew}
      isDecision={true}
    />
  );
};

export { DecisionConditionRenderControllerNew };
