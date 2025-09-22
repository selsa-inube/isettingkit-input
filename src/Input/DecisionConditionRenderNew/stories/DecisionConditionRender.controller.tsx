import { useFormik } from "formik";
import { DecisionConditionRenderNew } from "..";
import { ValueDataType, ValueHowToSetUp } from "../../types";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";

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
  };

  const formik = useFormik({
    initialValues: {
      conditionsThatEstablishesTheDecision: {
        ReciprocidadDeAhorro: 10,
      },
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
