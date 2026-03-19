import { IOption, Select, Stack, Text } from "@inubekit/inubekit";
import { StyledDecisionAlignmentContainer } from "../styles";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";

const renderDecisionSelectCheck = ({
  condition,
  formik,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
}) => {
  const handleChange = (_: string, newValue: string) => {
    formik.setFieldValue("value", newValue);
  };
  const placeholder =
    condition.placeholder ??
    `Seleccione una opción para ${condition.labelName}`;
  return (
    <StyledDecisionAlignmentContainer>
      <Stack gap="16px" alignItems="center">
        <Text type="title" weight="bold" size="medium" appearance="primary">
          {condition?.labelName}
        </Text>
        <Select
          id={condition.ruleName!}
          name={condition.ruleName!}
          options={condition.listOfPossibleValues?.list as IOption[]}
          value={formik.values.value}
          onChange={handleChange}
          placeholder={placeholder}
          message={formik.errors.value}
          invalid={Boolean(formik.touched.value && formik.errors.value)}
          fullwidth
        />
      </Stack>
    </StyledDecisionAlignmentContainer>
  );
};

export { renderDecisionSelectCheck };
