import React, { useEffect, useState } from "react";
import damacai from "../../assets/images/branches/damacai.svg";
import { JackpotContentHeader } from "./JackpotContentHeader";
import { API_V1, axiosPublic } from "../../const/apiData";

interface DamacaiJackpotProps {
  selectedDate: Date;
}

const localDamacai = [{ type: "PMPJP1", name: "3+3D Bonus" }];

export const DamacaiJackpot: React.FC<DamacaiJackpotProps> = ({
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
    console.log(joinData);
  }, [apiData]);

  return (
    <>
      {allData.map((damacaiJackpot, damacaiIndex) => {
        return (
          <div key={damacaiIndex}>
            <JackpotContentHeader
              backgroundColor="!bg-blue-300"
              logoImage={damacai}
              logoName={damacaiJackpot.name}
              title={damacaiJackpot.name}
            />
            {Object.keys(damacaiJackpot.fdData)
              .filter((nData) => nData.startsWith("n"))
              .slice(0, 3)
              .map((numbers, numberIndex) => {
                const bonus = damacaiJackpot.fdData[numbers];
                const place = numberIndex + 1;

                return (
                  <div
                    key={numberIndex}
                    className="flex flex-row gap-2 text-center my-2"
                  >
                    <div className="bg-red-100 text-white w-[30%] rounded-lg p-2 font-bold text-white-100">
                      {place}ST
                    </div>
                    <div className="bg-white w-[70%] font-bold p-2 shadow-all rounded-lg">
                      {bonus}
                    </div>
                  </div>
                );
              })}

            <div>
              <div className="bg-blue-300 text-white text-center font-bold p-2 rounded-lg text-white-100">
                Special
              </div>
              <div className="grid grid-cols-3 my-3 gap-2">
                {Object.keys(damacaiJackpot.fdData)
                  .filter((nData) => nData.startsWith("s"))
                  .map((numbers, numbersIndex) => {
                    const winner = damacaiJackpot.fdData[numbers];
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
              <div className="bg-blue-300 text-white text-center font-bold p-2 rounded-lg text-white-100">
                Consolation
              </div>
              <div className="grid grid-cols-3 my-3 gap-2">
                {Object.keys(damacaiJackpot.fdData)
                  .filter((nData) => nData.startsWith("c"))
                  .map((numbers, numbersIndex) => {
                    const winner = damacaiJackpot.fdData[numbers];
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
          </div>
        );
      })}
    </>
  );
};
