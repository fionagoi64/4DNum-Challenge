import React, { useEffect, useState } from "react";
import lucky from "../../../assets/images/branches/lucky.svg";
import { API_V1, axiosPublic } from "../../../const/apiData";
import { JackpotContentHeader } from "../JackpotContentHeader";
import { NumbersHeader } from "../NumbersHeader";
import { NumbersMap } from "../NumbersMap";

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
        const shadedN2 = [5];
        n2.splice(5, 0, " ");

        const n3Data = luckyJackpot.fdData.n3;
        const n3 = Array.from(n3Data);
        const shadedN3 = [0];
        n3.splice(0, 0, " ");

        const n4Data = luckyJackpot.fdData.n4;
        const n4 = Array.from(n4Data);
        const shadedN4 = [4, 5];
        n4.splice(5, 0, "", "");

        const n5Data = luckyJackpot.fdData.n5;
        const n5 = Array.from(n5Data);
        const shadedN5 = [0, 1];
        n5.splice(0, 0, "", "");

        const n6Data = luckyJackpot.fdData.n6;
        const n6 = Array.from(n6Data);
        const shadedN6 = [3, 4, 5];
        n6.splice(4, 0, "", "", "");

        const n7Data = luckyJackpot.fdData.n7;
        const n7 = Array.from(n7Data);
        const shadedN7 = [0, 1, 2];
        n7.splice(0, 0, "", "", "");

        const n8Data = luckyJackpot.fdData.n8;
        const n8 = Array.from(n8Data);
        const shadedN8 = [2, 3, 4, 5];
        n8.splice(2, 0, "", "", "", "");

        const n9Data = luckyJackpot.fdData.n9;
        const n9 = Array.from(n9Data);
        const shadedN9 = [0, 1, 2, 3];
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
            <NumbersMap jackpotData={n1} />

            <NumbersHeader isBlue200Bg={true} title="2ND" />
            <NumbersMap
              isFlex={true}
              jackpotData={n2}
              shadedData={shadedN2}
              jackpotSecondData={n3}
              shadedSecondData={shadedN3}
            />

            <NumbersHeader isBlue200Bg={true} title="3RD" />
            <NumbersMap
              isFlex={true}
              jackpotData={n4}
              shadedData={shadedN4}
              jackpotSecondData={n5}
              shadedSecondData={shadedN5}
            />

            <NumbersHeader isBlue200Bg={true} title="4TH" />
            <NumbersMap
              isFlex={true}
              jackpotData={n6}
              shadedData={shadedN6}
              jackpotSecondData={n7}
              shadedSecondData={shadedN7}
            />

            <NumbersHeader isBlue200Bg={true} title="5TH" />
            <NumbersMap
              isFlex={true}
              jackpotData={n8}
              shadedData={shadedN8}
              jackpotSecondData={n9}
              shadedSecondData={shadedN9}
            />
          </div>
        );
      })}
    </>
  );
};
