import { useState } from "react";

const isStillValid = (validUntil: string) => {
  const today = new Date();
  const targetDate = new Date(validUntil);

  const todayOnly = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const targetOnly = new Date(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate(),
  );

  return todayOnly <= targetOnly;
};
const useValidUntilManagement = (validUntil: string) => {
  const [showModal, setShowModal] = useState(false);
  const stillValid = isStillValid(validUntil);
  const handleOnClick = () => {
    setShowModal(!showModal);
  };
  return { showModal, handleOnClick, stillValid };
};
export { useValidUntilManagement };
