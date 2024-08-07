import React, { useEffect, useState } from "react";
import sports from "../../assets/images/branches/sports.svg";
import { JackpotContentHeader } from "./JackpotContentHeader";
import { API_V1, axiosPublic } from "../../const/apiData";

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
    console.log(joinData);
  }, [apiData]);
  return (
    <>
      <div>
        <div className="bg-black-100 text-white text-center font-bold p-2 rounded-lg text-white-100">
          Star JackPot 6/50
        </div>
        <div className="grid grid-cols-6 my-3">
          <div className="shadow-all rounded-md text-center font-medium">
            01
          </div>
        </div>
        <div className="flex flex-row gap-2 text-center">
          <div className="w-[40%]">Jackpot 1</div>
          <div className="w-[60%]">RM 14,965,381.71</div>
        </div>
      </div>
      <div className="mt-14">
        <JackpotContentHeader
          backgroundColor="!bg-red-100"
          logoImage={sports}
          logoName="sports toto"
          title="Sports Toto Jackpot"
        />
        <div className="bg-black-100 text-white text-center font-bold p-2 rounded-lg text-white-100">
          Supreme JackPot 6/55
        </div>
        <div className="grid grid-cols-6 my-3">
          <div className="shadow-all rounded-md text-center font-medium">
            01
          </div>
        </div>
        <div className="flex flex-row gap-2 text-center">
          <div className="w-[40%]">Jackpot 1</div>
          <div className="w-[60%]">RM 14,965,381.71</div>
        </div>
      </div>
      <div className="mt-14">
        <JackpotContentHeader
          backgroundColor="!bg-red-100"
          logoImage={sports}
          logoName="sports toto"
          title="Tot 5D"
        />
        <div className="bg-black-100 text-white text-center font-bold p-2 rounded-lg text-white-100">
          Supreme JackPot 6/55
        </div>
        <div className="grid grid-cols-6 my-3">
          <div className="shadow-all rounded-md text-center font-medium">
            01
          </div>
        </div>
        <div className="flex flex-row gap-2 text-center">
          <div className="w-[40%]">Jackpot 1</div>
          <div className="w-[60%]">RM 14,965,381.71</div>
        </div>
      </div>
      <div className="mt-14">
        <JackpotContentHeader
          backgroundColor="!bg-red-100"
          logoImage={sports}
          logoName="sports toto"
          title="Toto 6D"
        />
        <div className="flex">
          <div></div>
        </div>
      </div>
    </>
  );
};
