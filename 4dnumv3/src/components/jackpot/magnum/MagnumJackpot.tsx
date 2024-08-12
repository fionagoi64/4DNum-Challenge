import React, { useEffect, useState } from "react";
import magnum from "../../../assets/images/branches/magnum-border.svg";
import { JackpotContentHeader } from "../JackpotContentHeader";
import { API_V1, axiosPublic } from "../../../const/apiData";
import { NumbersHeader } from "../NumbersHeader";
import { NumberBox } from "../NumberBox";

interface MagnumJackpotProps {
  selectedDate: Date;
}

const localMagnum = [
  { type: "MJPLIFE", name: "Magnum Life" },
  { type: "MJPGOLD", name: "Golden Jackpot" },
];

export const MagnumJackpot: React.FC<MagnumJackpotProps> = ({
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
        localMagnum.some((localItem) => localItem.type === selectedData.type)
      ) // filter data where type is in localData
      .map((apiItem) => {
        const all = localMagnum.find(
          (localItem) => localItem.type === apiItem.type
        ); // join apiData & localData
        return { ...apiItem, ...all };
      });
    setAllData(joinData);
  }, [apiData]);

  return (
    <div className="space-y-14">
      {allData
        .sort((a, b) => {
          if (a.type === "MJPGOLD" && b.type === "MJPLIFE") return -1;
          if (a.type === "MJPLIFE" && b.type === "MJPGOLD") return 1;
          return 0;
        })
        .map((magnumJackpot, magnumIndex) => {
          const isMagnumLife = magnumJackpot.type === "MJPLIFE";
          const isGoldenJackpot = magnumJackpot.type === "MJPGOLD";

          const n1Data = magnumJackpot.fdData.n1;
          const n1 = Array.from(n1Data);
          n1.shift();
          n1.splice(0, 0, "");

          const n3Data = magnumJackpot.fdData.n3;
          const n3 = Array.from(n3Data);
          n3.pop();
          n3.splice(2, 0, "");

          const n4Data = magnumJackpot.fdData.n4;
          const n4 = Array.from(n4Data);

          return (
            <div key={magnumIndex}>
              <JackpotContentHeader
                backgroundColor="!bg-black-100 dark:!bg-black-500"
                logoImage={magnum}
                logoName="magnum"
                title={magnumJackpot.name}
              />

              {isGoldenJackpot && (
                <>
                  <div>
                    <NumbersHeader isYellowBg={true} title="Jackpot 1" />
                    <div>
                      <div className="grid grid-cols-9 my-2 gap-2">
                        {Object.keys(magnumJackpot.fdData)
                          .filter((key) => key.startsWith("n"))
                          .slice(0, 3)
                          .map((numbers) => {
                            const winner = magnumJackpot.fdData[numbers];
                            const splitArray = Array.from(winner);
                            return (
                              <React.Fragment key={numbers}>
                                {splitArray.map((item, index) => (
                                  <NumberBox
                                    key={`${numbers}-${index}`}
                                    number={item as React.ReactNode}
                                  />
                                ))}
                              </React.Fragment>
                            );
                          })}

                        <p className="text-center">+</p>

                        {n4.map((numbers, numbersIndex) => {
                          return (
                            <div
                              key={numbersIndex}
                              className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                            >
                              {numbers as React.ReactNode}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div>
                    <NumbersHeader isYellowBg={true} title="Jackpot 2" />
                    <div className="grid grid-cols-9 my-2 gap-2">
                      {Object.keys(magnumJackpot.fdData)
                        .filter((key) => key.startsWith("n"))
                        .slice(0, 2)
                        .map((numbers) => {
                          const winner = magnumJackpot.fdData[numbers];
                          const splitArray = Array.from(winner);
                          return (
                            <React.Fragment key={numbers}>
                              {splitArray.map((item, index) => (
                                <NumberBox
                                  key={`${numbers}-${index}`}
                                  number={item as React.ReactNode}
                                />
                              ))}
                            </React.Fragment>
                          );
                        })}

                      {n3.map((numbers, numbersIndex) => {
                        return (
                          <NumberBox
                            isShaded={true}
                            key={numbersIndex}
                            number={numbers as React.ReactNode}
                          />
                        );
                      })}
                      <p className="text-center">+</p>
                      {n4.map((numbers, numbersIndex) => {
                        return (
                          <div
                            key={numbersIndex}
                            className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                          >
                            {numbers as React.ReactNode}
                          </div>
                        );
                      })}
                    </div>
                    <div className="grid grid-cols-9 my-2 gap-2">
                      {n1.map((numbers, numbersIndex) => {
                        return (
                          <NumberBox
                            isShaded
                            key={numbersIndex}
                            number={numbers as React.ReactNode}
                          />
                        );
                      })}
                      {Object.keys(magnumJackpot.fdData)
                        .filter((key) => key.startsWith("n"))
                        .slice(1, 3)
                        .map((numbers) => {
                          const winner = magnumJackpot.fdData[numbers];
                          const splitArray = Array.from(winner);

                          return (
                            <React.Fragment key={numbers}>
                              {splitArray.map((item, index) => (
                                <NumberBox
                                  key={`${numbers}-${index}`}
                                  number={item as React.ReactNode}
                                />
                              ))}
                            </React.Fragment>
                          );
                        })}
                      <p className="text-center">+</p>

                      {n4.map((numbers, numbersIndex) => {
                        return (
                          <div
                            key={numbersIndex}
                            className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
                          >
                            {numbers as React.ReactNode}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <NumbersHeader
                      isBlackBg={true}
                      isDualTitle={true}
                      title="Gold Jackpot 1 Prize"
                      secondTitle="Gold Jackpot 2 Prize"
                    />
                    <div className="grid grid-cols-2 my-2 gap-2">
                      <NumberBox number={magnumJackpot.fdData.jp1} />
                      <NumberBox number={magnumJackpot.fdData.jp2} />
                    </div>
                  </div>
                </>
              )}

              {isMagnumLife && (
                <>
                  <div>
                    <NumbersHeader isYellowBg={true} title="Gold Jackpot" />
                    <div className="grid grid-cols-8 my-2 gap-2">
                      {Object.keys(magnumJackpot.fdData)
                        .filter((nData) => nData.startsWith("n"))
                        .slice(0, 8)
                        .map((numbers, numbersIndex) => {
                          const winner = magnumJackpot.fdData[numbers];
                          return (
                            <NumberBox key={numbersIndex} number={winner} />
                          );
                        })}
                    </div>
                  </div>

                  <div>
                    <NumbersHeader isBlackBg={true} title=" Bonus Numbers" />
                    <div className="grid grid-cols-2 my-2 gap-2">
                      {Object.keys(magnumJackpot.fdData)
                        .filter((nData) => nData.startsWith("n"))
                        .slice(8, 10)
                        .map((numbers, numbersIndex) => {
                          const winner = magnumJackpot.fdData[numbers];
                          return (
                            <NumberBox key={numbersIndex} number={winner} />
                          );
                        })}
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
    </div>
  );
};
