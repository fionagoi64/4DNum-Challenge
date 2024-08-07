import React, { useEffect, useState } from "react";
import { axiosPublic } from "../../../const/apiData";
import { API_V1 } from "../../../const/apiData";
import { CardContent } from "../../cards/CardContent";
import { localData } from "../../../data/localData";
import SingaporeJackpot from "./SingaporeJackpot";
import SabahJackpot from "./SabahJackpot";
import { DamacaiJackpot } from "./DamacaiJackpot";
import SportsJackpot from "./SportsJackpot";
import LuckyJackpot from "./LuckyJackpot";
import MagnumJackpot from "./MagnumJackpot";
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getResult(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    const AllData = apiData
      .filter((selectedData) =>
        localData.some((localItem) => localItem.jpType === selectedData.type)
      ) // filter data where type is in localData
      .map((apiItem) => {
        const all = localData.find(
          (extraItem) => extraItem.jpType === apiItem.type
        ); // join apiData & localData
        return { ...apiItem, ...all };
      });
    setAllData(AllData);
    console.log(AllData);
  }, [apiData]);

  return (
    <CardContent allData={allData} handleMenu={handleMenu}>
      {(all) => (
        <div id="card-numbers" className="px-3 pt-16 pb-1">
          {all.jpType === "MJPGOLD" && <MagnumJackpot />}
          {all.jpType === "PMPJP1" && <DamacaiJackpot />}
          {all.jpType === "STJP6/55" && <SportsJackpot />}
          {all.jpType === "SGJP6/45" && <SingaporeJackpot />}
          {all.jpType === "EEJP6/45" && <SabahJackpot />}
          {all.jpType === "HT15:30" && <LuckyJackpot />}
        </div>
      )}
    </CardContent>
  );
};
