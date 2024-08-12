import React, { useEffect, useState } from "react";
import { localData } from "../../data/localData";
import { API_V1, axiosPublic } from "../../const/apiData";
import { LuckyJackpot } from "../../components/jackpot/lucky/LuckyJackpot";
import { DamacaiJackpot } from "../../components/jackpot/damacai/DamacaiJackpot";
import { MagnumJackpot } from "../../components/jackpot/magnum/MagnumJackpot";
import { SportsJackpot } from "../../components/jackpot/sports/SportsJackpot";
import { SabahJackpot } from "../../components/jackpot/sabah/SabahJackpot";
import { SingaporeJackpot } from "../../components/jackpot/singapore/SingaporeJackpot";
import { CardContent } from "../../components/cards/CardContent";

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
