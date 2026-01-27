import { MultipleChoices } from "../../MultipleChoices";
import { StyledDecisionAlignmentMultipleChoicesContainer } from "../styles";
import { Condition, FormikType } from "../types/types";

const renderDecisionMultipleChoices = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => {
  const list = condition.listOfPossibleValues?.list || [];

  const options = list.map((item) => ({
    id: item,
    label: item,
    value: item,
  }));

  const formikValue =
    Array.isArray(formik.values.value) && formik.values.value.length > 0
      ? formik.values.value.join(",")
      : "";

  return (
    <StyledDecisionAlignmentMultipleChoicesContainer>
      <MultipleChoices
        id={condition.ruleName!}
        labelSelected={condition.labelName!}
        labelSelect={condition.labelName!}
        options={options}
        values={formikValue}
        onChange={(_name, value) => {
          const updatedArray = value.split(",").filter(Boolean);
          formik.setFieldValue("value", updatedArray);
        }}
        message={formik.errors.value}
        placeholderSelect={condition.placeholder!}
        onBlur={() => formik.setFieldTouched("value", true, true)}
      />
    </StyledDecisionAlignmentMultipleChoicesContainer>
  );
};

export { renderDecisionMultipleChoices };
