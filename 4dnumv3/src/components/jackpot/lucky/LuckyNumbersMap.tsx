import React from "react";
interface LuckyNumbersMapProps {
  jackpotData: any[];
  jackpotSecondData: any[];
  shadedData: number[];
  shadedSecondData: number[];
}

export const LuckyNumbersMap: React.FC<LuckyNumbersMapProps> = ({
  jackpotData,
  jackpotSecondData,
  shadedData,
  shadedSecondData,
}) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <div className="grid grid-cols-6 my-3 gap-1 w-full">
          {jackpotData.map((numbers, index) => {
            const isHighlighted = shadedData.includes(index);
            return (
              <div
                key={index}
                className={`border dark:text-white-100 border-transparent dark:border-gray-700 rounded-md text-center font-medium ${
                  isHighlighted
                    ? "bg-gray-900 dark:bg-gray-700"
                    : "bg-white-100 dark:bg-black-400 shadow-all"
                }`}
              >
                {numbers}
              </div>
            );
          })}
        </div>
        <div className="border-l border-gray-300 h-4" />
        <div className="grid grid-cols-6 my-3 gap-1 w-full">
          {jackpotSecondData.map((numbers, index) => {
            const isHighlighted = shadedSecondData.includes(index);
            return (
              <div
                key={index}
                className={`border dark:text-white-100 border-transparent dark:border-gray-700 rounded-md text-center font-medium ${
                  isHighlighted
                    ? "bg-gray-900 dark:bg-gray-700"
                    : "bg-white-100 dark:bg-black-400 shadow-all"
                }`}
              >
                {numbers}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
