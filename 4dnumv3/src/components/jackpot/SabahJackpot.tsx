import React, { useEffect, useState } from "react";
import sabah from "../../assets/images/branches/sabah.svg";
import { JackpotContentHeader } from "./JackpotContentHeader";
import { API_V1, axiosPublic } from "../../const/apiData";
interface SabahJackpotProps {
  selectedDate: Date;
}

const localSabah = [{ type: "EEJP6/45", name: "Sports Toto Jackpot" }];

export const SabahJackpot: React.FC<SabahJackpotProps> = ({ selectedDate }) => {
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
        localSabah.some((localItem) => localItem.type === selectedData.type)
      ) // filter data where type is in localData
      .map((apiItem) => {
        const all = localSabah.find(
          (localItem) => localItem.type === apiItem.type
        ); // join apiData & localData
        return { ...apiItem, ...all };
      });
    setAllData(joinData);
    // console.log(joinData);
  }, [apiData]);

  return (
    <>
      {allData.map((sabahJackpot, sabahJackpotIndex) => {
        return (
          <div key={sabahJackpotIndex}>
            <JackpotContentHeader
              backgroundColor="!bg-red-200"
              logoImage={sabah}
              logoName="sabah"
              title={sabahJackpot.name}
            />
            <div>
              <div className="bg-blue-400 text-white-100 text-center font-bold p-2 rounded-lg">
                Winning Numbers
              </div>
              <div className="grid grid-cols-8 my-2 gap-2">
                {Object.keys(sabahJackpot.fdData)
                  .filter((nData) => nData.startsWith("n"))
                  .slice(0, 6)
                  .map((numbers, numbersIndex) => {
                    const winner = sabahJackpot.fdData[numbers];
                    return (
                      <div
                        key={numbersIndex}
                        className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                      >
                        {winner}
                      </div>
                    );
                  })}
                <p className="text-center">+</p>
                <div className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium">
                  {sabahJackpot.fdData.n7}
                </div>
              </div>
              <div className="flex my-2 gap-2">
                <div className="text-center  w-2/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                  Jackpot 1
                </div>
                <div className="text-center w-3/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                  {sabahJackpot.fdData.jp1}
                </div>
              </div>
              <div className="flex my-2 gap-2">
                <div className="text-center  w-2/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                  Jackpot 2
                </div>
                <div className="text-center w-3/4 bg-gray-900 rounded-md text-xs font-medium py-0.5">
                  {sabahJackpot.fdData.jp2}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SabahJackpot;
