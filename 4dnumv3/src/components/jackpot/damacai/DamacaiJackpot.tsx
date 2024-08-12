import React, { useEffect, useState } from "react";
import damacai from "../../../assets/images/branches/damacai.svg";
import { API_V1, axiosPublic } from "../../../const/apiData";
import { getPlace } from "../../../const/getPlace";
import { sectionTitle } from "../../../data/sectionTitle";
import { JackpotContentHeader } from "../JackpotContentHeader";
import { NumberBox } from "../NumberBox";
import { NumbersHeader } from "../NumbersHeader";

interface DamacaiJackpotProps {
  selectedDate: Date;
}

const localDamacai = [{ type: "PMPJP1", name: "3+3D Bonus" }];

export const DamacaiJackpot: React.FC<DamacaiJackpotProps> = ({
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
    // console.log(joinData);
  }, [apiData]);

  return (
    <div>
      {allData.map((damacaiJackpot, damacaiIndex) => {
        return (
          <div key={damacaiIndex}>
            <JackpotContentHeader
              backgroundColor="!bg-blue-300"
              logoImage={damacai}
              logoName="damacai"
              title={damacaiJackpot.name}
            />
            {Object.keys(damacaiJackpot.fdData)
              .filter((nData) => nData.startsWith("n"))
              .slice(0, 3)
              .map((numbers, numberIndex) => {
                const bonus = damacaiJackpot.fdData[numbers];
                const place = numberIndex + 1;
                const placeName = getPlace(place);

                return (
                  <div
                    key={numberIndex}
                    className="flex flex-row gap-2 text-center my-2"
                  >
                    <div className="bg-red-100 text-white uppercase w-[30%] rounded-lg p-2 font-bold text-white-100">
                      {place}
                      {placeName}
                    </div>
                    <div className="bg-white w-[70%] font-bold p-2 shadow-all rounded-lg">
                      {bonus}
                    </div>
                  </div>
                );
              })}

            {sectionTitle.map((titleItem, titleIndex) => {
              const isSpecial = titleItem.includes("Special");
              const isConsolation = titleItem.includes("Consolation");

              const fd = Object.keys(damacaiJackpot.fdData);
              const sData = fd.filter((sData) => sData.startsWith("s"));
              sData.splice(9, 0, " ");
              sData.splice(11, 0, " ");

              const cData = fd.filter((cData) => cData.startsWith("c"));
              cData.splice(9, 0, " ");
              cData.splice(11, 0, " ");

              return (
                <div key={titleIndex}>
                  {isSpecial && (
                    <div>
                      <NumbersHeader isBlue300Bg={true} title="Special" />
                      <div className="grid grid-cols-3 my-3 gap-2">
                        {sData.map((sItems, sIndex) => {
                          return (
                            <NumberBox
                              key={sIndex}
                              number={damacaiJackpot.fdData[sItems]}
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {isConsolation && (
                    <div>
                      <NumbersHeader isBlue300Bg={true} title="Consolation" />
                      <div className="grid grid-cols-3 my-3 gap-2">
                        {cData.map((cItems, cIndex) => {
                          return (
                            <NumberBox
                              key={cIndex}
                              number={damacaiJackpot.fdData[cItems]}
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
