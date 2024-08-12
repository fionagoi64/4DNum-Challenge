import React from "react";

interface NumberBoxProps {
  number: string | React.ReactNode;
}

const NumberBox: React.FC<NumberBoxProps> = ({ number }) => {
  return (
    <div className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium">
      {number}
    </div>
  );
};

export default NumberBox;
