import React, { useEffect, useState } from "react";
import lucky from "../../../assets/images/branches/lucky.svg";
import { API_V1, axiosPublic } from "../../../const/apiData";
import { JackpotContentHeader } from "../shared/JackpotContentHeader";
import { NumbersHeader } from "../shared/NumbersHeader";
import { NumbersMap } from "../shared/NumbersMap";
import { LuckyNumbersMap } from "./LuckyNumbersMap";

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
        const n1 = Array.from(n1Data);

        const n2Data = luckyJackpot.fdData.n2;
        const n2 = Array.from(n2Data);
        n2.splice(5, 0, " ");

        const n3Data = luckyJackpot.fdData.n3;
        const n3 = Array.from(n3Data);
        n3.splice(0, 0, " ");

        const n4Data = luckyJackpot.fdData.n4;
        const n4 = Array.from(n4Data);
        n4.splice(5, 0, "", "");

        const n5Data = luckyJackpot.fdData.n5;
        const n5 = Array.from(n5Data);
        n5.splice(0, 0, "", "");

        const n6Data = luckyJackpot.fdData.n6;
        const n6 = Array.from(n6Data);
        n6.splice(4, 0, "", "", "");

        const n7Data = luckyJackpot.fdData.n7;
        const n7 = Array.from(n7Data);
        n7.splice(0, 0, "", "", "");

        const n8Data = luckyJackpot.fdData.n8;
        const n8 = Array.from(n8Data);
        n8.splice(2, 0, "", "", "", "");

        const n9Data = luckyJackpot.fdData.n9;
        const n9 = Array.from(n9Data);
        n9.splice(0, 0, "", "", "", "");

        return (
          <div key={luckyJackpotIndex}>
            <JackpotContentHeader
              backgroundColor="!bg-blue-200"
              logoImage={lucky}
              logoName="damacai"
              title={luckyJackpot.name}
            />
            <NumbersHeader isBlue300Bg={true} title="1ST" />
            <div className="grid grid-cols-6 my-3 gap-2">
              <NumbersMap jackpotData={n1} />
            </div>

            <NumbersHeader isBlue200Bg={true} title="2ND" />
            <LuckyNumbersMap
              jackpotData={n2}
              shadedData={[5]}
              jackpotSecondData={n3}
              shadedSecondData={[0]}
            />

            <NumbersHeader isBlue200Bg={true} title="3RD" />
            <LuckyNumbersMap
              jackpotData={n4}
              shadedData={[4, 5]}
              jackpotSecondData={n5}
              shadedSecondData={[0, 1]}
            />

            <NumbersHeader isBlue200Bg={true} title="4TH" />
            <LuckyNumbersMap
              jackpotData={n6}
              shadedData={[3, 4, 5]}
              jackpotSecondData={n7}
              shadedSecondData={[0, 1, 2]}
            />

            <NumbersHeader isBlue200Bg={true} title="5TH" />
            <LuckyNumbersMap
              jackpotData={n8}
              shadedData={[2, 3, 4, 5]}
              jackpotSecondData={n9}
              shadedSecondData={[0, 1, 2, 3]}
            />
          </div>
        );
      })}
    </>
  );
};
