import React from "react";
import { NumberBox } from "./NumberBox";
interface NumbersMapProps {
  jackpotData: any[];
  isFlex?: boolean;
  jackpotSecondData?: any[];
  shadedData?: number[]; // New prop for highlighting
  shadedSecondData?: number[]; // New prop for highlighting
}

export const NumbersMap: React.FC<NumbersMapProps> = ({
  jackpotData,
  jackpotSecondData = [],
  isFlex = false,
  shadedData = [],
  shadedSecondData = [],
}) => {
  return (
    <>
      {isFlex ? (
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
      ) : (
        <div className="grid grid-cols-6 my-3 gap-2">
          {jackpotData.map((number, index) => (
            <NumberBox key={index} number={number} />
          ))}
        </div>
      )}
    </>
  );
};
