import React, { useEffect, useState } from "react";
import lucky from "../../assets/images/branches/lucky.svg";
import { JackpotContentHeader } from "./JackpotContentHeader";
import { API_V1, axiosPublic } from "../../const/apiData";
interface LuckyJackpotProps {
  selectedDate: Date;
}

const localLucky = [{ type: "HJPT15:30", name: "Lucky Hari Hari 6D" }];

export const LuckyJackpot: React.FC<LuckyJackpotProps> = ({ selectedDate }) => {
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
        localLucky.some((localItem) => localItem.type === selectedData.type)
      ) // filter data where type is in localData
      .map((apiItem) => {
        const all = localLucky.find(
          (localItem) => localItem.type === apiItem.type
        ); // join apiData & localData
        return { ...apiItem, ...all };
      });
    setAllData(joinData);
    // console.log(joinData);
  }, [apiData]);

  return (
    <>
      {allData.map((luckyJackpot, luckyJackpotIndex) => {
        const n1Data = luckyJackpot.fdData.n1;
        const n2Data = luckyJackpot.fdData.n2;
        const n3Data = luckyJackpot.fdData.n3;
        const n4Data = luckyJackpot.fdData.n4;
        const n5Data = luckyJackpot.fdData.n5;
        const n6Data = luckyJackpot.fdData.n6;
        const n7Data = luckyJackpot.fdData.n7;
        const n8Data = luckyJackpot.fdData.n8;
        const n9Data = luckyJackpot.fdData.n9;

        const n1 = Array.from(n1Data);

        const n2 = Array.from(n2Data);
        n2.splice(5, 0, " ");

        const n3 = Array.from(n3Data);
        n3.splice(1, 0, " ");

        const n4 = Array.from(n4Data);
        n4.splice(5, 0, "", "");

        const n5 = Array.from(n5Data);
        n5.splice(0, 0, "", "");

        const n6 = Array.from(n6Data);
        n6.splice(4, 0, "", "", "");

        const n7 = Array.from(n7Data);
        n7.splice(0, 0, "", "", "");

        const n8 = Array.from(n8Data);
        n8.splice(2, 0, "", "", "", "");

        const n9 = Array.from(n9Data);
        n9.splice(0, 0, "", "", "", "");

        return (
          <div key={luckyJackpotIndex}>
            <JackpotContentHeader
              backgroundColor="!bg-blue-300"
              logoImage={lucky}
              logoName="damacai"
              title={luckyJackpot.name}
            />
            <div className="bg-blue-300 text-white-100 text-center font-bold p-2 rounded-lg">
              1ST
            </div>
            <div className="grid grid-cols-6 my-3 gap-2">
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
            <div className="bg-blue-200 text-white-100 text-center font-bold p-2 rounded-lg">
              2ND
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="grid grid-cols-6 my-3 gap-1 w-full">
                {n2.map((numbers, numbersIndex) => {
                  const emptyField = n2.includes("");
                  return (
                    <>
                      {emptyField ? (
                        <div
                          key={numbersIndex}
                          className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                        >
                          {numbers as React.ReactNode}
                        </div>
                      ) : (
                        <>
                          <div
                            key={numbersIndex}
                            className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                          >
                            {numbers as React.ReactNode}
                          </div>
                        </>
                      )}
                    </>
                  );
                })}
              </div>
              <div className="border-l-[0.2px] border-gray-300 h-4" />
              <div className="grid grid-cols-6 my-3 gap-1 w-full">
                {n3.map((numbers, numbersIndex) => {
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
            <div className="bg-blue-200 text-white-100 text-center font-bold p-2 rounded-lg">
              3RD
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="grid grid-cols-6 my-3 gap-1 w-full">
                {n4.map((numbers, numbersIndex) => {
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
              <div className="border-l-[0.2px] border-gray-300 h-4" />
              <div className="grid grid-cols-6 my-3 gap-1 w-full">
                {n5.map((numbers, numbersIndex) => {
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
            <div className="bg-blue-200 text-white-100 text-center font-bold p-2 rounded-lg">
              4TH
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="grid grid-cols-6 my-3 gap-1 w-full">
                {n6.map((numbers, numbersIndex) => {
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
              <div className="border-l-[0.2px] border-gray-300 h-4" />
              <div className="grid grid-cols-6 my-3 gap-1 w-full">
                {n7.map((numbers, numbersIndex) => {
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
            <div className="bg-blue-200 text-white-100 text-center font-bold p-2 rounded-lg">
              5TH
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="grid grid-cols-6 my-3 gap-1 w-full">
                {n8.map((numbers, numbersIndex) => {
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
              <div className="border-l-[0.2px] border-gray-300 h-4" />
              <div className="grid grid-cols-6 my-3 gap-1 w-full">
                {n9.map((numbers, numbersIndex) => {
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
        );
      })}
    </>
  );
};

export default LuckyJackpot;
