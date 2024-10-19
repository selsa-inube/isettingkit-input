import { useState } from "react";
import { SelectCheck, SelectCheckProps } from "..";

export const ControllerSelectCheck = (props: SelectCheckProps) => {
  const { options } = props;

  // Initialize state based on passed options
  const [data, setData] = useState(options);

  // Handler to toggle checkbox state
  const handleToggleEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    // Update the 'checked' state for the specific option
    const updatedData = data.map((entry) =>
      entry.id === name ? { ...entry, checked } : entry,
    );

    // Update state with new data
    setData(updatedData);
  };

  return (
    <SelectCheck {...props} options={data} onChangeCheck={handleToggleEntry} />
  );
};
