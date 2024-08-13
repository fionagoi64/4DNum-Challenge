import React from "react";
import { NumberBox } from "../../shared/NumberBox";
import { NumbersHeader } from "../../shared/NumbersHeader";


interface Toto6DNumbersProps {
  title: string;
  jackpotNumber: string;
  jackpotSecondNumber: string;
}

export const Toto6DNumbers: React.FC<Toto6DNumbersProps> = ({
  title,
  jackpotNumber,
  jackpotSecondNumber,
}) => {
  return (
    <div className="flex flex-row gap-2 text-center my-2">
      <NumbersHeader
        className="w-1/3 uppercase !p-0.5"
        isBlackBg={true}
        title={title}
      />
      <div className="flex flex-row gap-2 text-center w-2/3">
        <NumberBox
          className="!font-bold !rounded-lg p-0.5 px-4 !text-left"
          number={jackpotNumber}
        />
        <p>or</p>
        <NumberBox
          className="!font-bold !rounded-lg p-0.5 px-4 !text-right"
          number={jackpotSecondNumber}
        />
      </div>
    </div>
  );
};