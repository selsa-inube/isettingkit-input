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
    decisionDataType: ValueDataType.ALPHABETICAL,
    conditionDataType: ValueDataType.ALPHABETICAL,
    howToSetTheCondition: ValueHowToSetUp.EQUAL,
    valueUse: "RANGE",
    howToSetTheDecision: "",
    ruleName: "",
    listOfPossibleValues: {
      list: [
        { id: "999900321", label: "999900321", value: "999900321" },
        { id: "qwe", label: "vfd", value: "qwe" },
      ],
    },
    value: [""],
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
