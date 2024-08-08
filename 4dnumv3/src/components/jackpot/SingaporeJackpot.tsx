import React, { useEffect, useState } from "react";
import singapore from "../../assets/images/branches/singapore.svg";
import { JackpotContentHeader } from "./JackpotContentHeader";
import { API_V1, axiosPublic } from "../../const/apiData";
interface SingaporeJackpotProps {
  selectedDate: Date;
}

const localSingapore = [{ type: "SGJP6/45", name: "Winning Numbers" }];

export const SingaporeJackpot: React.FC<SingaporeJackpotProps> = ({
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
        localSingapore.some((localItem) => localItem.type === selectedData.type)
      ) // filter data where type is in localData
      .map((apiItem) => {
        const all = localSingapore.find(
          (localItem) => localItem.type === apiItem.type
        ); // join apiData & localData
        return { ...apiItem, ...all };
      });
    setAllData(joinData);
    console.log(joinData);
  }, [apiData]);

  return (
    <div>
      {allData.map((singaporeJackpot, singaporeIndex) => {
        return (
          <div key={singaporeIndex}>
            <div className="bg-blue-300 text-white-100 text-center font-bold p-2 rounded-lg">
              {singaporeJackpot.name}
            </div>
            <div className="grid grid-cols-8 my-2 gap-2">
              {Object.keys(singaporeJackpot.fdData)
                .filter((nData) => nData.startsWith("n"))
                .slice(0, 6)
                .map((numbers, numbersIndex) => {
                  const winner = singaporeJackpot.fdData[numbers];
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
                {singaporeJackpot.fdData.n7}
              </div>
            </div>
            <div className="flex flex-row gap-2 text-center my-2">
              <div className="w-[25%] bg-blue-100 text-white-100 rounded-xl p-2">
                Prize Group
              </div>
              <div className="w-[40%] bg-blue-100 text-white-100 rounded-xl py-5">
                Share Amount
              </div>
              <div className="w-[40%] bg-blue-100 text-white-100 text-center rounded-xl p-2 lg:py-5">
                Winning Shares
              </div>
            </div>
            <div className="flex flex-row gap-2 text-center">
              <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                1
              </div>
              <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                $2,934,077
              </div>
              <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                2
              </div>
            </div>
            {/* remove me */}
            <div className="space-y-2 mt-2 mb-5">
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingaporeJackpot;
