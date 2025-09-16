import { Select, Stack, Text } from "@inubekit/inubekit";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";

const renderSelectCheck = ({
  condition,
  formik,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
}) => {
  const options =
    condition.listOfPossibleValues?.list?.map((item: string) => ({
      id: item,
      label: item,
      value: item,
    })) || [];
  const handleChange = (_: string, newValue: string) => {
    formik.setFieldValue(
      `conditionsThatEstablishesTheDecision.${condition.conditionName}`,
      newValue,
    );
  };

  return (
    <Stack gap="16px" alignItems="center">
      <Text type="body" weight="normal" size="medium" appearance="dark">
        {condition?.labelName}
      </Text>
      <Select
        id={condition.conditionName}
        name={`conditionsThatEstablishesTheDecision.${condition.conditionName}`}
        options={options}
        value={
          formik.values.conditionsThatEstablishesTheDecision[
            condition.conditionName
          ]
        }
        onChange={handleChange}
        placeholder={`Select ${condition.conditionName}`}
        message={
          formik.errors.conditionsThatEstablishesTheDecision?.[
            condition.conditionName
          ]
        }
        invalid={Boolean(
          formik.touched.conditionsThatEstablishesTheDecision?.[
            condition.conditionName
          ] &&
            formik.errors.conditionsThatEstablishesTheDecision?.[
              condition.conditionName
            ],
        )}
        fullwidth
      />
    </Stack>
  );
};

export { renderSelectCheck };
