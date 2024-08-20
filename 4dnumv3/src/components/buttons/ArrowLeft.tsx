import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface ArrowLeftProps {
  handleClick?: () => void;
  className?: string;
}

export const ArrowLeft: React.FC<ArrowLeftProps> = ({
  handleClick,
  className,
}) => {
  return (
    <button onClick={handleClick}>
      <MdOutlineKeyboardArrowLeft
        className={`text-white-100 p-0 text-4xl ${className}`}
      />
    </button>
  );
};
