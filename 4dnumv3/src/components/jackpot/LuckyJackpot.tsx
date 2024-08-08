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
      console.log(res);
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
    console.log(joinData);
  }, [apiData]);

  return (
    <>
      {allData.map((luckyJackpot, luckyJackpotIndex) => {
        const n1Data = luckyJackpot.fdData.n1;
        const n2Data = luckyJackpot.fdData.n2;
        const n3Data = luckyJackpot.fdData.n3;
        const n1 = Array.from(n1Data);
        const n2 = Array.from(n1Data);
        const n3 = Array.from(n1Data);

        return (
          <div key={luckyJackpotIndex}>
            <div className="bg-blue-300 text-white-100 text-center font-bold p-2 rounded-lg">
              1ST
            </div>
            <div className="grid grid-cols-6 my-3">
              <div className="shadow-all rounded-md text-center font-medium">
                01
              </div>
            </div>
            <div className="bg-blue-200 text-white-100 text-center font-bold p-2 rounded-lg">
              2ND
            </div>
            <div className="grid grid-cols-6 my-3">
              <div className="shadow-all rounded-md text-center font-medium">
                01
              </div>
            </div>
            <div className="bg-blue-200 text-white-100 text-center font-bold p-2 rounded-lg">
              3RD
            </div>
            <div className="grid grid-cols-6 my-3">
              <div className="shadow-all rounded-md text-center font-medium">
                01
              </div>
            </div>
            <div className="bg-blue-200 text-white-100 text-center font-bold p-2 rounded-lg">
              4TH
            </div>
            <div className="grid grid-cols-6 my-3">
              <div className="shadow-all rounded-md text-center font-medium">
                01
              </div>
            </div>
            <div className="bg-blue-200 text-white-100 text-center font-bold p-2 rounded-lg">
              5TH
            </div>
            <div className="grid grid-cols-6 my-3">
              <div className="shadow-all rounded-md text-center font-medium">
                01
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LuckyJackpot;
