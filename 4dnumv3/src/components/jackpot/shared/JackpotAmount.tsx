import React from "react";

interface JackpotAmountProps {
  title: string;
  amount: string;
}

export const JackpotAmount: React.FC<JackpotAmountProps> = ({
  title,
  amount,
}) => {
  return (
    <div className="flex my-2 gap-2">
      <div className="text-center  w-2/4 bg-gray-900 dark:bg-black-400 dark:text-white-100 rounded-md text-xs font-medium py-0.5">
        {title}
      </div>
      <div className="text-center w-3/4 bg-gray-900 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 rounded-md text-xs font-medium py-0.5">
        {amount}
      </div>
    </div>
  );
};
