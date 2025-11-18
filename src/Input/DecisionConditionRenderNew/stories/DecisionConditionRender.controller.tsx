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
    howToSetTheCondition: ValueHowToSetUp.RANGE,
    valueUse: "RANGE",
    howToSetTheDecision: "",
    ruleName: "",
    listOfPossibleValues: {
      list: [
        "Muy alto",
        "Alto",
        "Medio",
        "Bajo",
        "Muy bajo",
        "Muy alto1",
        "Alto1",
        "Medio1",
        "Bajo1",
        "Muy bajo1",
      ],
    },
    value: ["Muy alto"],
    groupKey: "group-primary",
  };

  const formik = useFormik({
    initialValues: {
      value: {
        from: "medio",
        to: "Bajo",
      },
    },
    onSubmit: () => {},
  });
  console.log("formik ", formik, " condition ", condition);
  return (
    <DecisionConditionRenderNew
      condition={condition}
      formik={formik as unknown as IFormikTypeNew}
      isDecision={false}
    />
  );
};

export { DecisionConditionRenderControllerNew };
