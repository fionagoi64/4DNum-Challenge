import React from "react";
interface NumbersHeaderProps {
  title: string;
  className?: string;
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
  className,
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
        ${isBlue400Bg && "bg-blue-400"}
        ${className}`}
    >
      {isDualTitle ? (
        <div className="flex items-center gap-2">
          <h1 className="text-center text-white-100">{title}</h1>
          <div className="border-l border-solid border-gray-500 h-4 "></div>
          <h1 className="text-center text-white-100">{secondTitle}</h1>
        </div>
      ) : (
        <>{title}</>
      )}
    </div>
  );
};
