import { Stack, Text } from "@inubekit/inubekit";
import { Checkpicker } from "../../checkpicker";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";

const renderMultipleChoices = ({
  condition,
  formik,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
}) => {
  const groupKey = condition.groupKey || "group-primary";

  const condFromFormik =
    formik.values.conditionsThatEstablishesTheDecision?.[groupKey]?.[
      condition.conditionName!
    ];

  const rawValue = condFromFormik?.value ?? condFromFormik;

  const currentValues = Array.isArray(rawValue) ? rawValue : [];

  const formikValue = currentValues.length > 0 ? currentValues.join(",") : "";

  return (
    <Stack alignItems="center" gap="16px" width="100%">
      <Text type="body" weight="normal" size="medium" appearance="dark">
        {condition.labelName}
      </Text>

      <Checkpicker
        name={condition.conditionName}
        placeholder="Seleccione"
        values={formikValue}
        options={condition.listOfPossibleValues?.list || []}
        fullwidth
        onChange={(_name, value) => {
          const selectedValues = value.split(",").filter(Boolean);

          formik.setFieldValue(
            `conditionsThatEstablishesTheDecision.${groupKey}.${condition.conditionName}.value`,
            selectedValues,
          );
        }}
      />
    </Stack>
  );
};

export { renderMultipleChoices };
