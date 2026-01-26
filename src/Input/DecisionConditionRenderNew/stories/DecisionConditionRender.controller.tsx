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
    // listOfPossibleValues: {
    //   list: [
    //     { id: "a", label: "12.89", value: "12.89" },
    //     { id: "b", label: "4", value: "4" },
    //     { id: "c", label: "3", value: "3" },
    //     { id: "d", label: "2", value: "2" },
    //     { id: "e", label: "1", value: "1" },
    //     { id: "f", label: "3", value: "3" },
    //     { id: "g", label: "99", value: "99" },
    //     { id: "h", label: "4", value: "4" },
    //     { id: "i", label: "10000", value: "10000" },
    //     { id: "j", label: "100000", value: "100000" },
    //   ],
    // },
    value: ["10000"],
    groupKey: "group-primary",
  };

  const formik = useFormik({
    initialValues: {
      value: {
        from: 0,
        to: 0,
      },
    },
    initialTouched: {
      value: {
        from: true,
        to: true,
      },
    },
    initialErrors: {
      value: {
        from: "From must be greater than 0.",
        to: "To must be greater than 0.",
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
