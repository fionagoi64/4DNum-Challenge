import React, { useEffect, useState } from "react";
import { CardContent } from "../../cards/CardContent";
import { localData } from "../../../data/localData";
import { MagnumJackpot } from "../../jackpot/magnum/MagnumJackpot";
import { API_V1, axiosPublic } from "../../../const/apiData";
import { DamacaiJackpot } from "../../jackpot/damacai/DamacaiJackpot";
import { SingaporeJackpot } from "../../jackpot/singapore/SingaporeJackpot";
import { SabahJackpot } from "../../jackpot/sabah/SabahJackpot";
import { LuckyJackpot } from "../../jackpot/lucky/LuckyJackpot";
import { SportsJackpot } from "../../jackpot/sports/SportsJackpot";

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
    const joinData = apiData
      .filter((selectedData) =>
        localData.some(
          (localItem) =>
            localItem.type === selectedData.type &&
            !["CS", "STC", "PT15:30"].includes(localItem.type)
        )
      ) // filter data where the type is needed

      .map((apiItem) => {
        const all = localData.find(
          (extraItem) => extraItem.type === apiItem.type
        ); // join apiData & localData that have same type
        return { ...apiItem, ...all };
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
