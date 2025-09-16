import { MultipleChoicesNew } from "../../../Input/MultipleChoicesNew";
import { StyledDecisionAlignmentMultipleChoicesContainer } from "../styles";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";

const renderDecisionMultipleChoices = ({
  condition,
  formik,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
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
      <MultipleChoicesNew
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
        placeholderSelect={`Select ${condition.ruleName}`}
        onBlur={() => formik.setFieldTouched("value", true, true)}
      />
    </StyledDecisionAlignmentMultipleChoicesContainer>
  );
};

export { renderDecisionMultipleChoices };
