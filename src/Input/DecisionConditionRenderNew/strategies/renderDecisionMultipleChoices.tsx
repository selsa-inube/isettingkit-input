import { Stack, Text } from "@inubekit/inubekit";
import { Checkpicker } from "../../checkpicker";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";

const renderDecisionMultipleChoices = ({
  condition,
  formik,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
}) => {
  const formikValue =
    Array.isArray(formik.values.value) && formik.values.value.length > 0
      ? formik.values.value.join(",")
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
          const updatedArray = value.split(",").filter(Boolean);
          formik.setFieldValue("value", updatedArray);
        }}
        options={condition.listOfPossibleValues?.list || []}
        values={formikValue}
      ></Checkpicker>
    </Stack>
  );
};

export { renderDecisionMultipleChoices };
