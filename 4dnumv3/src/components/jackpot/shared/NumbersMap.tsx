import React from "react";
interface NumbersMapProps {
  jackpotData: any[];
  shadedData?: number[];
  className?: string;
}

export const NumbersMap: React.FC<NumbersMapProps> = ({
  jackpotData,
  shadedData = [],
  className,
}) => {
  return (
    <>
      {jackpotData.map((numbers, index) => {
        const isHighlighted = shadedData.includes(index);
        return (
          <div
            key={index}
            className={`border dark:text-white-100 border-transparent dark:border-gray-700 rounded-md text-center font-medium w-full  ${
              isHighlighted
                ? "bg-gray-900 dark:bg-gray-700 text-gray-900 dark:text-gray-700"
                : "bg-white-100 dark:bg-black-400 shadow-all"
            }
            ${className}`}
          >
            {numbers}
          </div>
        );
      })}
    </>
  );
};
