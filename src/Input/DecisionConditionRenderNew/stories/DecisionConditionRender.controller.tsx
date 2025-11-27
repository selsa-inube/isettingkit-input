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
    decisionDataType: ValueDataType.PERCENTAGE,
    conditionDataType: ValueDataType.PERCENTAGE,
    howToSetTheCondition: ValueHowToSetUp.RANGE,
    valueUse: "RANGE",
    howToSetTheDecision: "",
    ruleName: "",
    listOfPossibleValues: {
      list: [
        {
          id: "a",
          label: "999900321",
          value: "a",
        },
        {
          id: "b",
          label: "4",
          value: "b",
        },
        {
          id: "c",
          label: "3",
          value: "c",
        },
        {
          id: "d",
          label: "2",
          value: "d",
        },
        {
          id: "e",
          label: "1",
          value: "e",
        },
        {
          id: "f",
          label: "3",
          value: "f",
        },
        {
          id: "g",
          label: "99",
          value: "g",
        },
        {
          id: "h",
          label: "4",
          value: "h",
        },
        {
          id: "i",
          label: "10000",
          value: "i",
        },
        {
          id: "j",
          label: "100000",
          value: "j",
        },
      ],
    },
    value: ["10000"],
    groupKey: "group-primary",
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return (
    <DecisionConditionRenderNew
      condition={condition}
      formik={formik as unknown as IFormikTypeNew}
      isDecision={false}
    />
  );
};

export { DecisionConditionRenderControllerNew };
