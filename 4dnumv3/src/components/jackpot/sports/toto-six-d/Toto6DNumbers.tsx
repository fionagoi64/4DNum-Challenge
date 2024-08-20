import React from "react";
import { NumberBox } from "../../shared/NumberBox";
import { NumbersHeader } from "../../shared/NumbersHeader";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div className="flex flex-row gap-2 text-center my-2">
      <NumbersHeader
        className="w-1/3 uppercase !p-0.5"
        isBlackBg={true}
        title={title}
      />
      <div className="flex flex-row gap-2 text-center w-2/3">
        <NumberBox
          className="!font-bold !rounded-lg p-0.5 px-3 !text-left w-20"
          number={jackpotNumber}
        />
        <span className="">{t("or")}</span>
        <NumberBox
          className="!font-bold !rounded-lg p-0.5 px-3 !text-right w-20"
          number={jackpotSecondNumber}
        />
      </div>
    </div>
  );
};
