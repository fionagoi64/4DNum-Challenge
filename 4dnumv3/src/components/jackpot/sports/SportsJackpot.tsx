import React, { useEffect, useState } from "react";
import sports from "../../../assets/images/branches/sports.svg";
import { API_V1, axiosPublic } from "../../../const/apiData";
import { getPlace } from "../../../const/getPlace";
import { JackpotContentHeader } from "../shared/JackpotContentHeader";
import { JackpotAmount } from "../shared/JackpotAmount";
import { NumbersHeader } from "../shared/NumbersHeader";
import { NumberBox } from "../shared/NumberBox";
import { Toto6DNumbers } from "./toto-six-d/Toto6DNumbers";
interface SportsJackpotProps {
  selectedDate: Date;
}

const localSports = [
  { type: "STJP1" },
  { type: "STJP6/58", name: "Supreme Jackpot 6/58" },
  { type: "STJP6/55", name: "Power Jackpot 6/55" },
  { type: "STJP6/50", name: "Star Jackpot 6/50" },
];

export const SportsJackpot: React.FC<SportsJackpotProps> = ({
  selectedDate,
}) => {
  const [apiData, setApiData] = useState<any[]>([]);
  const [allData, setAllData] = useState<any[]>([]);

  const getResult = async (date: Date) => {
    try {
      const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD
      const res = await axiosPublic.get(`/${API_V1}/result/${formattedDate}`);
      setApiData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getResult(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    const joinData = apiData
      .filter((selectedData) =>
        localSports.some((localItem) => localItem.type === selectedData.type)
      ) // filter data where type is in localData
      .map((apiItem) => {
        const all = localSports.find(
          (localItem) => localItem.type === apiItem.type
        ); // join apiData & localData
        return { ...apiItem, ...all };
      });
    setAllData(joinData);
    // console.log(joinData);
  }, [apiData]);
  return (
    <>
      {/* Sports Toto Jackpot */}
      <div>
        <JackpotContentHeader
          backgroundColor="!bg-red-100"
          logoImage={sports}
          logoName="sports"
          title="Sports Toto Jackpot"
        />
        {allData
          .sort((a, b) => {
            if (a.type === "STJP1" && b.type === "STJP6/50") return -1;
            if (a.type === "STJP6/50" && b.type === "STJP1") return 1;
            return 0;
          })
          .map((sportsJackpot, sportsJackpotIndex) => {
            const isSTJP58 = sportsJackpot.type === "STJP6/58";
            const isSTJP55 = sportsJackpot.type === "STJP6/55";

            return (
              <div key={sportsJackpotIndex}>
                {isSTJP58 && (
                  <>
                    <div className="bg-black-100 dark:bg-gray-600 text-center text-white-100 font-bold p-2 rounded-lg">
                      {sportsJackpot.name}
                    </div>
                    <div className="grid grid-cols-6 my-2 gap-2">
                      {Object.keys(sportsJackpot.fdData)
                        .filter((nData) => nData.startsWith("n"))
                        .slice(0, 6)
                        .map((numbers, numbersIndex) => {
                          const winner = sportsJackpot.fdData[numbers];
                          return (
                            <div
                              key={numbersIndex}
                              className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                            >
                              {winner}
                            </div>
                          );
                        })}
                    </div>
                    <JackpotAmount
                      title="Jackpot 1"
                      amount={sportsJackpot.fdData.jp1}
                    />
                  </>
                )}
                {isSTJP55 && (
                  <>
                    <div className="bg-black-100 dark:bg-gray-600 text-center text-white-100 font-bold p-2 rounded-lg">
                      {sportsJackpot.name}
                    </div>
                    <div className="grid grid-cols-6 my-2 gap-2">
                      {Object.keys(sportsJackpot.fdData)
                        .filter((nData) => nData.startsWith("n"))
                        .slice(0, 6)
                        .map((numbers, numbersIndex) => {
                          const winner = sportsJackpot.fdData[numbers];
                          return (
                            <div
                              key={numbersIndex}
                              className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                            >
                              {winner}
                            </div>
                          );
                        })}
                    </div>
                    <JackpotAmount
                      title="Jackpot 1"
                      amount={sportsJackpot.fdData.jp1}
                    />
                  </>
                )}
              </div>
            );
          })}
      </div>

      {/* Toto 5D */}
      <div className="mt-14">
        <JackpotContentHeader
          backgroundColor="!bg-red-100"
          logoImage={sports}
          logoName="sports"
          title="Toto 5D"
        />
        {allData.map((sportsJackpot, sportsJackpotIndex) => {
          const isSTJP1 = sportsJackpot.type === "STJP1";
          return (
            <div key={sportsJackpotIndex} className="grid grid-cols-2 gap-2">
              {isSTJP1 && (
                <>
                  {Object.keys(sportsJackpot.fdData)
                    .filter((nData) => nData.startsWith("n"))
                    .slice(0, 6)
                    .map((numbers, numbersIndex) => {
                      const winner = sportsJackpot.fdData[numbers];
                      const place = numbersIndex + 1;
                      const placeName = getPlace(place);

                      return (
                        <div key={numbersIndex} className="flex flex-row gap-2">
                          <NumbersHeader
                            className="w-3/4 uppercase"
                            isBlackBg={true}
                            title={`${place}${placeName}`}
                          />
                          <NumberBox
                            className="!font-bold !rounded-lg p-2 "
                            number={winner}
                          />
                        </div>
                      );
                    })}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Toto 6D */}
      <div className="mt-14">
        <JackpotContentHeader
          backgroundColor="!bg-red-100"
          logoImage={sports}
          logoName="sports"
          title="Toto 6D"
        />
        {allData.map((sportsJackpot, sportsJackpotIndex) => {
          const isSTJP1 = sportsJackpot.type === "STJP1";
          const isSTJP50 = sportsJackpot.type === "STJP6/50";

          return (
            <div key={sportsJackpotIndex}>
              <div className="mb-2">
                {isSTJP1 && (
                  <div className="space-y-2">
                    <div className="flex flex-row gap-2 text-center my-2">
                      <NumbersHeader
                        className="w-1/2 uppercase !p-0.5"
                        isBlackBg={true}
                        title="1ST"
                      />
                      <NumberBox
                        className="!font-bold !rounded-lg p-0.5 "
                        number={sportsJackpot.fdData.n7}
                      />
                    </div>

                    <Toto6DNumbers
                      title="2ND"
                      jackpotNumber={sportsJackpot.fdData.n7}
                      jackpotSecondNumber={sportsJackpot.fdData.n8}
                    />

                    <Toto6DNumbers
                      title="3RD"
                      jackpotNumber={sportsJackpot.fdData.n9}
                      jackpotSecondNumber={sportsJackpot.fdData.n10}
                    />

                    <Toto6DNumbers
                      title="4TH"
                      jackpotNumber={sportsJackpot.fdData.n11}
                      jackpotSecondNumber={sportsJackpot.fdData.n12}
                    />

                    <Toto6DNumbers
                      title="5TH"
                      jackpotNumber={sportsJackpot.fdData.n13}
                      jackpotSecondNumber={sportsJackpot.fdData.n14}
                    />
                  </div>
                )}
              </div>
              {isSTJP50 && (
                <>
                  <NumbersHeader isBlackBg={true} title={sportsJackpot.name} />
                  <div className="grid grid-cols-6 my-2 gap-2">
                    {Object.keys(sportsJackpot.fdData)
                      .filter((nData) => nData.startsWith("n"))
                      .slice(0, 6)
                      .map((numbers, numbersIndex) => {
                        const winner = sportsJackpot.fdData[numbers];
                        return (
                          <div
                            key={numbersIndex}
                            className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                          >
                            {winner}
                          </div>
                        );
                      })}
                  </div>

                  <JackpotAmount
                    title="Jackpot 1"
                    amount={sportsJackpot.fdData.jp1}
                  />

                  <JackpotAmount
                    title="Jackpot 2"
                    amount={sportsJackpot.fdData.jp2}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
