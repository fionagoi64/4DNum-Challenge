import React, { useEffect, useState } from "react";
import sabah from "../../../assets/images/branches/sabah.svg";
import { JackpotContentHeader } from "../shared/JackpotContentHeader";
import { API_V1, axiosPublic } from "../../../const/apiData";
import { JackpotAmount } from "../shared/JackpotAmount";
import { NumberBox } from "../shared/NumberBox";
import { NumbersHeader } from "../shared/NumbersHeader";
import { useTranslation } from "react-i18next";
interface SabahJackpotProps {
  selectedDate: Date;
}

const localSabah = [{ type: "EEJP6/45", name: "sportsToto" }];

export const SabahJackpot: React.FC<SabahJackpotProps> = ({ selectedDate }) => {
  const { t } = useTranslation();
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
        localSabah.some((localItem) => localItem.type === selectedData.type)
      ) // filter data where type is in localData
      .map((apiItem) => {
        const all = localSabah.find(
          (localItem) => localItem.type === apiItem.type
        ); // join apiData & localData
        return { ...apiItem, ...all };
      });
    setAllData(joinData);
    // console.log(joinData);
  }, [apiData]);

  return (
    <>
      {allData.map((sabahJackpot, sabahJackpotIndex) => {
        return (
          <div key={sabahJackpotIndex}>
            <JackpotContentHeader
              backgroundColor="!bg-red-200"
              logoImage={sabah}
              logoName="sabah"
              title={t(sabahJackpot.name)}
            />
            <div>
              <NumbersHeader isBlue400Bg={true} title={t("winningNumbers")} />

              <div className="grid grid-cols-8 my-2 gap-2">
                {Object.keys(sabahJackpot.fdData)
                  .filter((nData) => nData.startsWith("n"))
                  .slice(0, 6)
                  .map((numbers, numbersIndex) => {
                    const winner = sabahJackpot.fdData[numbers];
                    return (
                      <div
                        key={numbersIndex}
                        className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                      >
                        {winner}
                      </div>
                    );
                  })}
                <p className="text-center">+</p>

                <NumberBox number={sabahJackpot.fdData.n7} />
              </div>

              <JackpotAmount
                title={t("jackpotOne")}
                amount={sabahJackpot.fdData.jp1}
              />

              <JackpotAmount
                title={t("jackpotTwo")}
                amount={sabahJackpot.fdData.jp2}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
