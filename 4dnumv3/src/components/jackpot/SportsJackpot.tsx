import React, { useEffect, useState } from "react";
import sports from "../../assets/images/branches/sports.svg";
import { JackpotContentHeader } from "./JackpotContentHeader";
import { API_V1, axiosPublic } from "../../const/apiData";
import { getPlace } from "../../const/getPlace";

interface SportsJackpotProps {
  selectedDate: Date;
}

const localDamacai = [
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
        localDamacai.some((localItem) => localItem.type === selectedData.type)
      ) // filter data where type is in localData
      .map((apiItem) => {
        const all = localDamacai.find(
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
                    <div className="flex my-2 gap-2">
                      <div className="text-center  w-2/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                        Jackpot 1
                      </div>
                      <div className="text-center w-3/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                        {sportsJackpot.fdData.jp1}
                      </div>
                    </div>
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
                    <div className="flex my-2 gap-2">
                      <div className="text-center  w-2/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                        Jackpot 1
                      </div>
                      <div className="text-center w-3/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                        {sportsJackpot.fdData.jp1}
                      </div>
                    </div>
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
                        <div
                          key={numbersIndex}
                          className="flex flex-row gap-2 text-center "
                        >
                          <div className="bg-black-100 text-white uppercase w-2/4 rounded-lg p-2 font-bold text-white-100">
                            {place}
                            {placeName}
                          </div>
                          <div className="bg-white w-3/4 font-bold p-2 shadow-all rounded-lg">
                            {winner}
                          </div>
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
                    <div className="flex flex-row gap-2 text-center">
                      <div className="bg-black-100 text-white uppercase w-1/3 rounded-lg font-bold text-white-100 py-0.5">
                        1ST
                      </div>
                      <div className="bg-white w-2/3 font-bold shadow-all rounded-lg py-0.5">
                        {sportsJackpot.fdData.n7}
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 text-center ">
                      <div className="bg-black-100 text-white uppercase w-1/3 rounded-lg font-bold text-white-100 py-0.5">
                        2nd
                      </div>
                      <div className="flex gap-2 w-2/3">
                        <div className="bg-white font-bold shadow-all rounded-lg w-full text-left px-5 py-0.5">
                          {sportsJackpot.fdData.n8}
                        </div>
                        <p>or</p>
                        <div className="bg-white font-bold shadow-all rounded-lg w-full text-right px-5 py-0.5">
                          {sportsJackpot.fdData.n9}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 text-center ">
                      <div className="bg-black-100 text-white uppercase w-1/3 rounded-lg font-bold text-white-100 py-0.5">
                        3rd
                      </div>
                      <div className="flex gap-2 w-2/3">
                        <div className="bg-white font-bold shadow-all rounded-lg w-full text-left px-5 py-0.5">
                          {sportsJackpot.fdData.n10}
                        </div>
                        <p>or</p>
                        <div className="bg-white font-bold shadow-all rounded-lg w-full text-right px-5 py-0.5">
                          {sportsJackpot.fdData.n11}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 text-center ">
                      <div className="bg-black-100 text-white uppercase w-1/3 rounded-lg font-bold text-white-100">
                        4th
                      </div>
                      <div className="flex gap-2 w-2/3">
                        <div className="bg-white font-bold shadow-all rounded-lg w-full text-left px-5 py-0.5">
                          {sportsJackpot.fdData.n12}
                        </div>
                        <p>or</p>
                        <div className="bg-white font-bold shadow-all rounded-lg w-full text-right px-5 py-0.5">
                          {sportsJackpot.fdData.n13}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 text-center ">
                      <div className="bg-black-100 text-white uppercase w-1/3 rounded-lg font-bold text-white-100 py-0.5">
                        5th
                      </div>
                      <div className="flex gap-2 w-2/3">
                        <div className="bg-white font-bold shadow-all rounded-lg w-full text-left px-5 py-0.5">
                          {sportsJackpot.fdData.n14}
                        </div>
                        <p>or</p>
                        <div className="bg-white font-bold shadow-all rounded-lg w-full text-right px-5 py-0.5">
                          {sportsJackpot.fdData.n15}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {isSTJP50 && (
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
                  <div className="flex my-2 gap-2">
                    <div className="text-center  w-2/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                      Jackpot 1
                    </div>
                    <div className="text-center w-3/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                      {sportsJackpot.fdData.jp1}
                    </div>
                  </div>
                  <div className="flex my-2 gap-2">
                    <div className="text-center w-2/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                      Jackpot 2
                    </div>
                    <div className="text-center w-3/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                      {sportsJackpot.fdData.jp2}
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
