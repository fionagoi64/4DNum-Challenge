import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface ArrowLeftProps {
  handleClick: () => void;
}

export const ArrowLeft: React.FC<ArrowLeftProps> = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      <MdOutlineKeyboardArrowLeft className="text-white-100 p-0 text-[50px]" />
    </button>
  );
};
