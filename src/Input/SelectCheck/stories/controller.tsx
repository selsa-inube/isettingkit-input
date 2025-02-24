import { useState } from "react";
import { SelectCheck, SelectCheckProps } from "..";

export const ControllerSelectCheck = (props: SelectCheckProps) => {
  const { options } = props;
  const [data, setData] = useState(options);

  const handleToggleEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const updatedData = data.map((entry) =>
      entry.id === name ? { ...entry, checked } : entry,
    );
    setData(updatedData);
  };

  return (
    <SelectCheck {...props} options={data} onChangeCheck={handleToggleEntry} />
  );
};
