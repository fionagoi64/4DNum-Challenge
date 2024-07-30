import React, { useEffect, useState } from "react";
import { axiosPublic } from "../../data/apiData";
import { API_V1 } from "../../data/apiData";
import { CardContent } from "../cards/share/CardContent";
import { getImageUrl } from "../../data/imgPath";
import { localData } from "../../data/localData";
import SingaporeJackpot from "../cards/jackpot/SingaporeJackpot";
import SabahJackpot from "../cards/jackpot/SabahJackpot";
import DamacaiJackpot from "../cards/jackpot/DamacaiJackpot";
import SportsJackpot from "../cards/jackpot/SportsJackpot";
import LuckyJackpot from "../cards/jackpot/LuckyJackpot";
import MagnumJackpot from "../cards/jackpot/MagnumJackpot";
interface HomeProps {
  handleMenu: () => void;
}

export const Jackpot: React.FC<HomeProps> = ({ handleMenu }) => {
  //#region command
  const [date, setDate] = useState(new Date());
  const [apiData, setApiData] = useState<any[]>([]);
  const [allData, setAllData] = useState<any[]>([]);

  const getResult = async (selectedDate: Date) => {
    try {
      const formattedDate = selectedDate.toISOString().split("T")[0]; //YYYY-MM-DD
      axiosPublic.get(`/${API_V1}/result/${formattedDate}`).then((res) => {
        setApiData(res.data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getResult(date);
  }, [date]);

  useEffect(() => {
    const AllData = apiData
      .filter((selectedData) =>
        localData.some((extraItem) => extraItem.type === selectedData.type)
      ) //filter data w type in extraData
      .map((apiItem) => {
        const all = localData.find(
          (extraItem) => extraItem.type === apiItem.type
        ); //join apiData & extraData
        return { ...apiItem, ...all };
      });
    setAllData(AllData);
    console.log(AllData);
  }, [apiData]);
  // #endregion

  return (
    <CardContent allData={allData} handleMenu={handleMenu}>
      {(all) => (
        <div id="card-numbers" className="px-5 pt-12 pb-1 space-y-3">
          {/* inner header*/}
          <div className="bg-black rounded-t-[50px] rounded-b-xl">
            <div className="logos-bg !h-[50px] !w-[50px] mx-auto -top-5">
              <img
                className="logos !h-[40px] !w-[40px] "
                src={all.cardImg}
                alt={all.name}
              />
            </div>
            <p className="text-white text-center font-bold text-lg">
              Magnum Life
            </p>
          </div>
          {all.id === "magnum" && <MagnumJackpot />}
          {all.id === "damacai" && <DamacaiJackpot />}
          {all.id === "sports" && <SportsJackpot />}
          {all.id === "singapore" && <SingaporeJackpot />}
          {all.id === "sabah" && <SabahJackpot />}
          {all.id === "lucky" && <LuckyJackpot />}
        </div>
      )}
    </CardContent>
  );
};
