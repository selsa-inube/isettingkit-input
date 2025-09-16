import { useState } from "react";
import { IOption } from "@inubekit/inubekit";
import { MultipleChoicesNew } from "..";

const sampleOptions: IOption[] = Array.from({ length: 10 }, (_, i) => ({
  id: `option-${i + 1}`,
  label: `Option ${i + 1}`,
  value: `option-${i + 1}`,
}));

const MultipleChoicesNewController = () => {
  const [form, setForm] = useState({
    country: "",
  });

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <MultipleChoicesNew
      id="country"
      labelSelect="Select your countries"
      labelSelected="Selected countries"
      options={sampleOptions}
      values={form.country}
      onChange={handleChange}
      placeholderSelect="Choose one or more"
      message=""
      required
    />
  );
};

export { MultipleChoicesNewController };
