import React, { useRef } from "react";
import { Share } from "../buttons/Share";
import { Refresh } from "../buttons/Refresh";
import { Hamburger } from "../buttons/Hamburger";
import { Card } from "./Card";
import { ArrowLeft } from "../buttons/ArrowLeft";
import { useTranslation } from "react-i18next";
interface CardContentProps {
  children: (all: any) => React.ReactNode;
  allData: any[];
  handleMenu: () => void;
  isArrowButton?: boolean;
  handleClick?: () => void;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  allData,
  handleMenu,
  isArrowButton,
  handleClick = () => {},
}) => {
  const { t } = useTranslation();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <Card allData={allData} cardRefs={cardRefs}>
      {(all) => {
        const magnum = all.type === "M";
        const damacai = all.type === "PMP";
        const sports = all.type === "ST";
        const singapore = all.type === "SG";
        const sandakan = all.type === "STC";
        const sabah = all.type === "EE";
        const special = all.type === "CS";
        const lucky = all.type === "HT15:30";
        const perdana = all.type === "PT15:30";

        return (
          <div>
            {/* card header */}
            <div
              id={all.id}
              className={`dark:bg-black-500 border-4 border-transparent md:-mt-1 md:-mx-1 px-5 pt-20 md:pt-4 pb-14 rounded-b-[45px] rounded-[20px]
                ${magnum && "bg-black-500 dark:border-yellow-100"}
                ${damacai && "bg-blue-300 dark:border-purple-200"}
                ${sports && "bg-red-100 dark:border-red-100"}
                ${singapore && "bg-blue-100 dark:border-blue-100"}
                ${sandakan && "bg-yellow-100 dark:border-yellow-100"}
                ${sabah && "bg-red-200 dark:border-red-200"}
                ${special && "bg-green-200 dark:border-green-200"}
                ${lucky && "bg-blue-200 dark:border-blue-200"}
                ${perdana && "bg-blue-400 dark:border-blue-400"}`}
            >
              <div className="flex flex-row items-start">
                <div className="md:opacity-0">
                  <Hamburger handleClick={handleMenu} />
                </div>
                {isArrowButton && (
                  <> {magnum && <ArrowLeft handleClick={handleClick} />}</>
                )}
                <div className="flex flex-col justify-center items-center gap-1 w-full">
                  <div className="logos-bg">
                    <img
                      className="logos"
                      src={all.cardImg}
                      alt={t(all.name)}
                    />
                  </div>
                  <h1
                    className={`text-white-100 text-lg font-bold ${
                      sandakan && "!text-green-100"
                    }`}
                  >
                    {t(all.name)}
                  </h1>
                </div>
                <div className="flex flex-col items-center gap-8">
                  <div className="md:hidden">
                    <Refresh />
                  </div>
                  <Share />
                </div>
              </div>
            </div>
            {/* card date & draw no. */}
            <div
              id="card-date"
              className="absolute bg-white-100 dark:bg-black-200  border border-transparent dark:border-gray-700 top-48 md:top-32 w-[calc(100%-2.5rem)] left-1/2 -translate-x-1/2 rounded-2xl shadow-all"
            >
              <div className="flex flex-row rounded-2xl py-3 items-center">
                <div className="date">
                  <p className="font-thin text-[10px] dark:text-white-100">
                    {t("date")}
                  </p>
                  <p className="text-sm dark:text-white-100">
                    {all.fdData.dd} ({all.fdData.day})
                  </p>
                </div>
                <div className="border-l-[0.2px] border-gray-300 h-8" />
                <div className="draw">
                  <p className="font-thin text-[10px] dark:text-white-100">
                    {t("drawNo")}
                  </p>
                  <p className="text-sm dark:text-white-100">{all.fdData.dn}</p>
                </div>
              </div>
            </div>
            {/* Parent: Home || Jackpot */}
            {children(all)}
          </div>
        );
      }}
    </Card>
  );
};
