import React from "react";
import { getImageUrl } from "../../data/imgPath";
import { Share } from "../buttons/Share";
import { Refresh } from "../buttons/Refresh";
import { Hamburger } from "../buttons/Hamburger";
import { NumberCard } from "./NumberCard";

interface NumberContentProps {
  children: (all: any) => React.ReactNode;
  allData: any[];
}

export const NumberContent: React.FC<NumberContentProps> = ({
  children,
  allData,
}) => {
  return (
    <NumberCard allData={allData}>
      {(all) => (
        <div>
          {/* card header */}
          <div
            id="card-header"
            className="text-white bg-black-100 px-5 pt-20 md:pt-4 pb-14 rounded-b-[45px] rounded-[20px]"
          >
            <div className="flex flex-row items-start">
              <Hamburger />
              <div className="flex flex-col justify-center items-center w-full">
                <div className="logos-bg">
                  <img
                    className="logos"
                    src={getImageUrl(all.card)}
                    alt={all.name}
                  />
                </div>
                <h1>{all.name}</h1>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Refresh />
                <Share />
              </div>
            </div>
          </div>
          {/* card date & draw no. */}
          <div
            id="card-date"
            className="absolute top-48 md:top-32 w-[calc(100%-2.5rem)] left-1/2 -translate-x-1/2 bg-surface rounded-2xl shadow-all"
          >
            <div className="flex flex-row rounded-2xl py-3 items-center">
              <div className="date">
                <p className="font-thin text-[10px]">Date</p>
                <p className="text-sm">
                  {all.fdData.dd} ({all.fdData.day})
                </p>
              </div>
              <div className="border-l-[0.2px] border-gray-300 h-8" />
              <div className="draw">
                <p className="font-thin text-[10px]">Draw No.</p>
                <p className="text-sm">{all.fdData.dn}</p>
              </div>
            </div>
          </div>
          {/* Parent: Home || Jackpot */}
          {children(all)}
        </div>
      )}
    </NumberCard>
  );
};
