import React from "react";
interface NumbersHeaderProps {
  title: string;
  isBlackBg?: boolean;
  isYellowBg?: boolean;
  isRedBg?: boolean;
  isBlue200Bg?: boolean;
  isBlue300Bg?: boolean;
  isGreenBg?: boolean;
  isBlue400Bg?: boolean;
  isDualTitle?: boolean;
  secondTitle?: string;
}

export const NumbersHeader: React.FC<NumbersHeaderProps> = ({
  isDualTitle,
  title,
  secondTitle,
  isBlackBg,
  isYellowBg,
  isRedBg,
  isBlue200Bg,
  isBlue300Bg,
  isGreenBg,
  isBlue400Bg,
}) => {
  return (
    <div
      className={`text-white-100 text-center font-bold p-2 rounded-lg   
        ${isYellowBg && "bg-yellow-100 !text-black-100"}
        ${isRedBg && "bg-red-100"}
        ${isBlackBg && "bg-black-100 dark:bg-gray-600"}
          ${isBlue200Bg && "bg-blue-200"}
        ${isBlue300Bg && "bg-blue-300"}
        ${isGreenBg && "bg-green-100"}
        ${isBlue400Bg && "bg-blue-400"}`}
    >
      {isDualTitle ? (
        <div className="flex items-center">
          <h1 className="flex-1 text-center text-white-100">{title}</h1>
          <div className="border-l border-solid border-gray-500 h-4 "></div>
          <h1 className="flex-1 text-center text-white-100">{secondTitle}</h1>
        </div>
      ) : (
        <>{title}</>
      )}
    </div>
  );
};
