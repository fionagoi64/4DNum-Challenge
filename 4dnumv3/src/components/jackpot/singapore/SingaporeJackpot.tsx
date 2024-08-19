import React, { useEffect, useState } from "react";
import singapore from "../../../assets/images/branches/singapore.svg";
import { API_V1, axiosPublic } from "../../../const/apiData";
import { JackpotContentHeader } from "../shared/JackpotContentHeader";
import { NumberBox } from "../shared/NumberBox";
import { NumbersHeader } from "../shared/NumbersHeader";
import { useTranslation } from "react-i18next";

interface SingaporeJackpotProps {
  selectedDate: Date;
}

const localSingapore = [{ type: "SGJP6/45", name: "singaporeToto" }];

export const SingaporeJackpot: React.FC<SingaporeJackpotProps> = ({
  selectedDate,
}) => {
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
        localSingapore.some((localItem) => localItem.type === selectedData.type)
      ) // filter data where type is in localData
      .map((apiItem) => {
        const all = localSingapore.find(
          (localItem) => localItem.type === apiItem.type
        ); // join apiData & localData
        return { ...apiItem, ...all };
      });
    setAllData(joinData);
    console.log(joinData);
  }, [apiData]);

  return (
    <div>
      {allData.map((singaporeJackpot, singaporeIndex) => {
        return (
          <div key={singaporeIndex}>
            <JackpotContentHeader
              backgroundColor="!bg-blue-100"
              logoImage={singapore}
              logoName="damacai"
              title={singaporeJackpot.name}
              isSingapore={true}
              dd={singaporeJackpot.fdData.dd}
              day={singaporeJackpot.fdData.day}
              dn={singaporeJackpot.fdData.dn}
            />

            <NumbersHeader isBlue300Bg={true} title={t("winningNumbers")} />

            <div className="grid grid-cols-8 my-2 gap-2">
              {Object.keys(singaporeJackpot.fdData)
                .filter((nData) => nData.startsWith("n"))
                .slice(0, 6)
                .map((numbers, numbersIndex) => {
                  const winner = singaporeJackpot.fdData[numbers];
                  return <NumberBox key={numbersIndex} number={winner} />;
                })}

              <p className="text-center">+</p>

              <NumberBox number={singaporeJackpot.fdData.n7} />
            </div>

            <div className="flex flex-row gap-2 text-center my-2">
              <div className="w-[25%] bg-blue-100 text-white-100 rounded-xl p-2">
                {t("prizeGroup")}
              </div>
              <div className="w-[40%] bg-blue-100 text-white-100 rounded-xl py-5">
                {t("shareAmount")}
              </div>
              <div className="w-[40%] bg-blue-100 text-white-100 text-center rounded-xl p-2 lg:py-5">
                {t("winningNumbers")}
              </div>
            </div>
            <div className="flex flex-row gap-2 text-center">
              <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                1
              </div>
              <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                $2,934,077
              </div>
              <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                2
              </div>
            </div>
            {/* remove me */}
            <div className="space-y-2 mt-2 mb-5">
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
              <div className="flex flex-row gap-2 text-center">
                <div className="w-[25%] bg-blue-300 text-white-100 rounded-md">
                  1
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  $2,934,077
                </div>
                <div className="w-[40%] bg-white-100 shadow-all rounded-md">
                  2
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
