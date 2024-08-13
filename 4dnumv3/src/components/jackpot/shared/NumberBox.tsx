import React from "react";

interface NumberBoxProps {
  number: string | React.ReactNode;
  isShaded?: boolean;
  className?: string;
}

export const NumberBox: React.FC<NumberBoxProps> = ({
  number,
  isShaded,
  className,
}) => {
  return (
    <div
      className={`${
        isShaded
          ? "bg-gray-900 dark:bg-gray-700"
          : "bg-white-100 dark:bg-black-400 shadow-all "
      } ${className} border dark:text-white-100 border-transparent dark:border-gray-700 rounded-md text-center font-medium w-full`}
    >
      {number}
    </div>
  );
};
