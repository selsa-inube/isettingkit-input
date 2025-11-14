/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const groupKey = condition.groupKey || "group-primary";

  const options =
    condition.listOfPossibleValues?.list?.map((item: string) => ({
      id: item,
      label: item,
      value: item,
    })) || [];

  const condFromFormik =
    formik.values.conditionsThatEstablishesTheDecision?.[groupKey]?.[
      condition.conditionName!
    ];

  const selectValue = condFromFormik?.value ?? "";

  const errorsForCond = (formik.errors as any)
    .conditionsThatEstablishesTheDecision?.[groupKey]?.[
    condition.conditionName!
  ];

  const touchedForCond = (formik.touched as any)
    .conditionsThatEstablishesTheDecision?.[groupKey]?.[
    condition.conditionName!
  ];

  const normalizeError = (err: any): string | undefined => {
    if (!err) return undefined;
    if (typeof err === "string") return err;
    if (typeof err === "object" && typeof err.value === "string") {
      return err.value;
    }
    return undefined;
  };

  const message = normalizeError(errorsForCond);
  const isInvalid = Boolean(
    (touchedForCond?.value ?? touchedForCond) && message,
  );

  const handleChange = (_: string, newValue: string) => {
    formik.setFieldValue(
      `conditionsThatEstablishesTheDecision.${groupKey}.${condition.conditionName}.value`,
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
        name={`conditionsThatEstablishesTheDecision.${groupKey}.${condition.conditionName}.value`}
        options={options}
        value={selectValue}
        onChange={handleChange}
        placeholder={`Select ${condition.conditionName}`}
        message={message}
        invalid={isInvalid}
        fullwidth
      />
    </Stack>
  );
};

export { renderSelectCheck };
