import React, { useEffect, useState } from "react";
import { CardContent } from "../../cards/CardContent";
import { localData } from "../../../data/localData";
import SingaporeJackpot from "../../jackpot/SingaporeJackpot";
import SabahJackpot from "../../jackpot/SabahJackpot";
import { DamacaiJackpot } from "../../jackpot/DamacaiJackpot";
import { SportsJackpot } from "../../jackpot/SportsJackpot";
import LuckyJackpot from "../../jackpot/LuckyJackpot";
import { MagnumJackpot } from "../../jackpot/MagnumJackpot";
import { API_V1, axiosPublic } from "../../../const/apiData";

interface HomeProps {
  handleMenu: () => void;
  selectedDate: Date;
}

export const Jackpot: React.FC<HomeProps> = ({ handleMenu, selectedDate }) => {
  const [apiData, setApiData] = useState<any[]>([]);
  const [allData, setAllData] = useState<any[]>([]);

  const getResult = async (date: Date) => {
    try {
      const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD
      const res = await axiosPublic.get(`/${API_V1}/result/${formattedDate}`);
      setApiData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getResult(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    const apiDataMap = apiData.reduce((acc: Record<string, any>, item: any) => {
      acc[item.type] = item;
      return acc;
    }, {});

    const joinData = localData.map((localItem: any) => {
      const jpTypeArray = Array.isArray(localItem.jpType)
        ? localItem.jpType
        : [localItem.jpType];

      const apiItem = apiDataMap[localItem.type] || { fdData: {} };

      const jpTypeWithData = jpTypeArray.map((jpTypeItem: any) => ({
        ...jpTypeItem,
        fdData: apiItem.fdData, 
      }));

      return {
        ...localItem,
        fdData: apiItem.fdData,
        jpType: jpTypeWithData,
      };
    });

    setAllData(joinData);
    console.log(joinData);
  }, [apiData]);

  return (
    <CardContent allData={allData} handleMenu={handleMenu}>
      {(all) => (
        <div id="card-numbers" className="px-3 pt-16 pb-1">
          {all.type === "M" && <MagnumJackpot selectedDate={selectedDate} />}
          {all.type === "PMP" && <DamacaiJackpot selectedDate={selectedDate} />}
          {all.type === "ST" && <SportsJackpot selectedDate={selectedDate} />}
          {all.type === "SG" && (
            <SingaporeJackpot selectedDate={selectedDate} />
          )}
          {all.type === "EE" && <SabahJackpot selectedDate={selectedDate} />}
          {all.type === "HT15:30" && (
            <LuckyJackpot selectedDate={selectedDate} />
          )}
        </div>
      )}
    </CardContent>
  );
};
