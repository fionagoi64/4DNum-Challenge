import React, { useEffect, useState } from "react";
import magnum from "../../assets/images/branches/magnum-border.svg";
import { JackpotContentHeader } from "./JackpotContentHeader";
import { API_V1, axiosPublic } from "../../const/apiData";
interface MagnumJackpotProps {
  selectedDate: Date;
}

const localMagnum = [
  { type: "MJPLIFE", name: "Magnum Life" },
  { type: "MJPGOLD", name: "Golden Jackpot" },
];

export const MagnumJackpot: React.FC<MagnumJackpotProps> = ({
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
        localMagnum.some((localItem) => localItem.type === selectedData.type)
      ) // filter data where type is in localData
      .map((apiItem) => {
        const all = localMagnum.find(
          (localItem) => localItem.type === apiItem.type
        ); // join apiData & localData
        return { ...apiItem, ...all };
      });
    setAllData(joinData);
  }, [apiData]);

  return (
    <div className="space-y-14">
      {allData.map((magnumJackpot, magnumIndex) => {
        const isMagnumLife = magnumJackpot.type === "MJPLIFE";
        const isGoldenJackpot = magnumJackpot.type === "MJPGOLD";

        const n1Data = magnumJackpot.fdData.n1;
        const n2Data = magnumJackpot.fdData.n2;
        const n3Data = magnumJackpot.fdData.n3;
        const n1 = Array.from(n1Data);
        const n2 = Array.from(n1Data);
        const n3 = Array.from(n1Data);

        return (
          <div key={magnumIndex}>
            <JackpotContentHeader
              backgroundColor="!bg-black-100 dark:!bg-black-500"
              logoImage={magnum}
              logoName={magnumJackpot.name}
              title={magnumJackpot.name}
            />

            {isMagnumLife && (
              <>
                <div>
                  <div className="bg-yellow-100 text-black-100 text-center font-bold p-2 rounded-lg">
                    Winning Numbers
                  </div>
                  <div className="grid grid-cols-8 my-2 gap-2">
                    {Object.keys(magnumJackpot.fdData)
                      .filter((nData) => nData.startsWith("n"))
                      .slice(0, 8)
                      .map((numbers, numbersIndex) => {
                        const winner = magnumJackpot.fdData[numbers];
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
                </div>

                <div>
                  <div className="bg-black-100 dark:bg-gray-600 text-center text-white-100 font-bold p-2 rounded-lg">
                    Bonus Numbers
                  </div>
                  <div className="grid grid-cols-2 my-2 gap-2">
                    {Object.keys(magnumJackpot.fdData)
                      .filter((nData) => nData.startsWith("n"))
                      .slice(8, 10)
                      .map((numbers, numbersIndex) => {
                        const winner = magnumJackpot.fdData[numbers];
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
                </div>
              </>
            )}

            {isGoldenJackpot && (
              <>
                <div>
                  <div className="bg-yellow-100 text-black-100 text-center font-bold p-2 rounded-lg">
                    Jackpot 1
                  </div>
                  <div>
                    <div className="grid grid-cols-9 my-2 gap-2">
                      {Object.keys(magnumJackpot.fdData)
                        .filter((key) => key.startsWith("n"))
                        .slice(0, 3)
                        .map((key) => {
                          const winner = magnumJackpot.fdData[key];
                          const splitArray = Array.from(winner);
                          console.log(splitArray);
                          return (
                            <>
                              {splitArray.map((item, index) => (
                                <div
                                  key={index}
                                  className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                                >
                                  {item as React.ReactNode}
                                </div>
                              ))}
                            </>
                          );
                        })}

                      <p className="text-center">+</p>

                      {n1.map((numbers, numbersIndex) => {
                        return (
                          <div
                            key={numbersIndex}
                            className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                          >
                            {numbers as React.ReactNode}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-yellow-100 text-black-100 text-center font-bold p-2 rounded-lg">
                    Jackpot 2
                  </div>
                  <div className="grid grid-cols-9 my-2 gap-2">
                    {Object.keys(magnumJackpot.fdData)
                      .filter((key) => key.startsWith("n"))
                      .slice(0, 3)
                      .map((key) => {
                        const winner = magnumJackpot.fdData[key];
                        const splitArray = Array.from(winner);
                        console.log(splitArray);
                        return (
                          <>
                            {splitArray.map((item, index) => (
                              <div
                                key={index}
                                className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                              >
                                {item as React.ReactNode}
                              </div>
                            ))}
                          </>
                        );
                      })}
                    <p className="text-center">+</p>
                    {n1.map((numbers, numbersIndex) => {
                      return (
                        <div
                          key={numbersIndex}
                          className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                        >
                          {numbers as React.ReactNode}
                        </div>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-9 my-2 gap-2">
                    {Object.keys(magnumJackpot.fdData)
                      .filter((key) => key.startsWith("n"))
                      .slice(0, 3)
                      .map((key) => {
                        const winner = magnumJackpot.fdData[key];
                        const splitArray = Array.from(winner);
                        console.log("winner:" + winner);
                        return (
                          <>
                            {splitArray.map((item, index) => (
                              <div
                                key={index}
                                className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                              >
                                {item as React.ReactNode}
                              </div>
                            ))}
                          </>
                        );
                      })}
                    <p className="text-center">+</p>
                    {n1.map((numbers, numbersIndex) => {
                      return (
                        <div
                          key={numbersIndex}
                          className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                        >
                          {numbers as React.ReactNode}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="bg-black-100 dark:bg-gray-600 text-center text-white-100 font-bold p-2 rounded-lg">
                    <div className="flex items-center">
                      <h1 className="flex-1 text-center text-white-100">
                        Gold Jackpot 1 Prize
                      </h1>
                      <div className="border-l border-solid border-gray-500 h-4 "></div>
                      <h1 className="flex-1 text-center text-white-100">
                        Gold Jackpot 2 Prize
                      </h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 my-2 gap-2">
                    <div className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium">
                      {magnumJackpot.fdData.jp1}
                    </div>
                    <div className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium">
                      {magnumJackpot.fdData.jp2}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
