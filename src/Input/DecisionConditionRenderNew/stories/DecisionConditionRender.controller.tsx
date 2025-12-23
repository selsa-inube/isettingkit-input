import { useFormik } from "formik";
import { DecisionConditionRenderNew } from "..";

import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";
import { ValueDataType } from "../../../Input/types/ValueDataType";
import { ValueHowToSetUp } from "../../../Input/types/ValueHowToSetUp";
import { useEffect } from "react";

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
        { id: "a", label: "999900321", value: "a" },
        { id: "b", label: "4", value: "b" },
        { id: "c", label: "3", value: "c" },
        { id: "d", label: "2", value: "d" },
        { id: "e", label: "1", value: "e" },
        { id: "f", label: "3", value: "f" },
        { id: "g", label: "99", value: "g" },
        { id: "h", label: "4", value: "h" },
        { id: "i", label: "10000", value: "i" },
        { id: "j", label: "100000", value: "j" },
      ],
    },
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
    onSubmit: () => {},
  });

  useEffect(() => {
    formik.setFieldTouched("value.from", true, false);
    formik.setFieldTouched("value.to", true, false);

    formik.setFieldError("value.from", "From must be greater than 0.");
    formik.setFieldError("value.to", "To must be greater than 0.");
  }, [formik]);

  return (
    <DecisionConditionRenderNew
      condition={condition}
      formik={formik as unknown as IFormikTypeNew}
      isDecision={true}
    />
  );
};

export { DecisionConditionRenderControllerNew };
