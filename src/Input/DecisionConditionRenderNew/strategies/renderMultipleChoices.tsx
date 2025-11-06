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
  const list = condition.listOfPossibleValues?.list || [];

  const options = list.map((item) => ({
    id: item,
    label: item,
    value: item,
  }));

  const currentValues =
    formik.values.conditionsThatEstablishesTheDecision?.[
      condition.conditionName
    ];

  const formikValue =
    Array.isArray(currentValues) && currentValues.length > 0
      ? currentValues.join(",")
      : "";
  return (
    <Stack alignItems="center" gap="16px" width="100%">
      <Text
        type={condition ? "body" : "title"}
        weight={condition ? "normal" : "bold"}
        size="medium"
        appearance={condition ? "dark" : "primary"}
      >
        {condition.labelName}
      </Text>
      <Checkpicker
        name={condition.conditionName}
        placeholder={`Seleccione`}
        onChange={(_name, value) => {
          const selectedValues = value.split(",").filter(Boolean);
          formik.setFieldValue(
            `conditionsThatEstablishesTheDecision.${condition.conditionName}`,
            selectedValues,
          );
        }}
        options={options}
        values={formikValue}
        fullwidth
      ></Checkpicker>
    </Stack>
  );
};

export { renderMultipleChoices };
