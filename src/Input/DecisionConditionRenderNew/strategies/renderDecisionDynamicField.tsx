import { DynamicFieldNew } from "../../../Input/DynamicFieldNew";
import { StyledDecisionAlignmentContainer } from "../styles";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";

const renderDecisionDynamicFieldNew = ({
  condition,
  formik,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
}) => {
  return (
    <StyledDecisionAlignmentContainer>
      <DynamicFieldNew
        type={condition.decisionDataType!.toLowerCase()}
        name={condition.ruleName!}
        label={condition.labelName!}
        value={formik.values.value}
        onChange={(_name, value) => formik.setFieldValue("value", value)}
        messageValidate={String(formik.errors.value || "")}
        placeholder={condition.placeholder!}
        statusValidate={
          formik.touched.value
            ? formik.errors.value
              ? "invalid"
              : "valid"
            : undefined
        }
        onBlur={formik.handleBlur}
        listOfPossibleValues={condition.listOfPossibleValues}
      />
    </StyledDecisionAlignmentContainer>
  );
};

export { renderDecisionDynamicFieldNew };
