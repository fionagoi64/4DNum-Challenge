import React from "react";
import share from "../../assets/images/share.svg";
import { getImageUrl } from "../../data/imgPath";

interface CardProps {
  children: (all: any, allIndex: number) => React.ReactNode;
  allData: any[];
}

export const Card: React.FC<CardProps> = ({ children, allData }) => {
  return (
    <>
      <div className="sticky top-0 bg-background z-20 h-20"></div>
      <section
        id="card"
        className="flex flex-wrap justify-center gap-2 container mx-auto max-w-screen-xl"
      >
        {allData.map((all, allIndex) => (
          <div
            key={allIndex}
            id="card-body"
            className="body relative rounded-[20px] w-[31%]"
          >
            {/* card header */}
            <div
              id="card-header"
              className="text-white bg-black-100 px-5 pt-4 pb-14 rounded-b-[45px] rounded-[20px]"
            >
              <div className="flex flex-row items-start">
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
                <button>
                  <img src={share} alt="" className="py-2" />
                </button>
              </div>
            </div>
            {/* card date & draw no. */}
            <div className="absolute top-32 w-[calc(100%-2.5rem)] left-1/2 -translate-x-1/2 bg-surface rounded-2xl shadow-all">
              <div className="flex flex-row rounded-2xl py-3 my-2 items-center">
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
            {children(all, allIndex)}
          </div>
        ))}
      </section>
    </>
  );
};
