import { useFormik } from "formik";
import { DecisionConditionRender } from "..";
import { Condition, FormikType } from "../types/types";
import { ValueDataType, ValueHowToSetUp } from "../../../Input/types";

const DecisionConditionRenderController = () => {
  const condition: Condition = {
    labelName: "Reciprocidad de ahorro",
    conditionName: "ReciprocidadDeAhorro",
    decisionDataType: ValueDataType.ALPHABETICAL,
    conditionDataType: ValueDataType.ALPHABETICAL,
    howToSetTheCondition: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    valueUse: "LIST_OF_VALUES_MULTI",
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
    <DecisionConditionRender
      condition={condition}
      formik={formik as unknown as FormikType}
      isDecision={true}
    />
  );
};

export { DecisionConditionRenderController };
