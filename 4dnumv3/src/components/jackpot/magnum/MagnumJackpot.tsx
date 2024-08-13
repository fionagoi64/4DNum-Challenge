import React, { useEffect, useState } from "react";
import magnum from "../../../assets/images/branches/magnum-border.svg";
import { JackpotContentHeader } from "../shared/JackpotContentHeader";
import { API_V1, axiosPublic } from "../../../const/apiData";
import { NumbersHeader } from "../shared/NumbersHeader";
import { NumberBox } from "../shared/NumberBox";
import { NumbersMap } from "../shared/NumbersMap";

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
  const [isShow, setIsShow] = useState(false);

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

  const showGoldenNumber = () => {
    setIsShow(!isShow);
  };

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

          const n2Data = magnumJackpot.fdData.n2;
          const n2 = Array.from(n2Data);

          const n3Data = magnumJackpot.fdData.n3;
          const n3 = Array.from(n3Data);

          const n4Data = magnumJackpot.fdData.n4;
          const n4 = Array.from(n4Data);

          return (
            <div key={magnumIndex}>
              {isGoldenJackpot && (
                <>
                  {/* Golden Number */}
                  {isShow && (
                    <div>
                      <div className="flex flex-row gap-2 text-center my-2">
                        <NumbersHeader
                          className="w-1/2 !font-medium"
                          isYellowBg={true}
                          title="Golden Number"
                        />

                        <div className="w-2/3 flex flex-row gap-2">
                          <NumbersMap jackpotData={n4} className="p-2" />
                        </div>
                      </div>
                      <div>
                        <NumbersHeader isBlackBg={true} title="3RD Prize" />
                        <div className="grid grid-cols-6 gap-2 my-2">
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
                        </div>
                      </div>
                      <div>
                        <NumbersHeader isBlackBg={true} title="4TH Prize" />
                        <div className="flex flex-row items-center gap-2">
                          <div className="grid grid-cols-6 gap-2 my-2 w-full">
                            <NumbersMap jackpotData={n1} />
                            <NumbersMap jackpotData={n2} />
                            <NumbersMap jackpotData={n3} shadedData={[1]} />
                          </div>
                          <div className="border-l border-gray-300 h-4" />
                          <div className="grid grid-cols-6 gap-2 my-2 w-full">
                            <NumbersMap jackpotData={n1} shadedData={[0]} />
                            <NumbersMap jackpotData={n2} />
                            <NumbersMap jackpotData={n3} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <NumbersHeader isBlackBg={true} title="5TH Prize" />
                        <div className="flex flex-row items-center gap-2">
                          <div className="grid grid-cols-6 gap-2 my-2 w-full">
                            <NumbersMap jackpotData={n1} />
                            <NumbersMap jackpotData={n2} />
                            <NumbersMap jackpotData={n3} shadedData={[0, 1]} />
                          </div>
                          <div className="border-l border-gray-300 h-4" />
                          <div className="grid grid-cols-6 gap-2 my-2 w-full">
                            <NumbersMap jackpotData={n1} shadedData={[0, 1]} />
                            <NumbersMap jackpotData={n2} />
                            <NumbersMap jackpotData={n3} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <NumbersHeader isBlackBg={true} title="6TH Prize" />
                        <div className="flex flex-row items-center gap-2">
                          <div className="grid grid-cols-6 gap-2 my-2 w-full">
                            <NumbersMap jackpotData={n1} />
                            <NumbersMap jackpotData={n2} shadedData={[1]} />
                            <NumbersMap jackpotData={n3} shadedData={[0, 1]} />
                          </div>
                          <div className="border-l border-gray-300 h-4" />
                          <div className="grid grid-cols-6 gap-2 my-2 w-full">
                            <NumbersMap jackpotData={n1} shadedData={[0, 1]} />
                            <NumbersMap jackpotData={n2} shadedData={[0]} />
                            <NumbersMap jackpotData={n3} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <NumbersHeader isBlackBg={true} title="7TH Prize" />
                        <div className="flex flex-row items-center gap-2">
                          <div className="grid grid-cols-6 gap-2 my-2 w-full">
                            <NumbersMap jackpotData={n1} />
                            <NumbersMap jackpotData={n2} shadedData={[0, 1]} />
                            <NumbersMap jackpotData={n3} shadedData={[0, 1]} />
                          </div>
                          <div className="border-l border-gray-300 h-4" />
                          <div className="grid grid-cols-6 gap-2 my-2 w-full">
                            <NumbersMap jackpotData={n1} shadedData={[0, 1]} />
                            <NumbersMap jackpotData={n2} shadedData={[0, 1]} />
                            <NumbersMap jackpotData={n3} />
                          </div>
                        </div>
                        <div className="flex justify-center mx-[85px] gap-2 mb-2">
                          <NumbersMap jackpotData={n1} shadedData={[0, 1]} />
                          <NumbersMap jackpotData={n2} />
                          <NumbersMap jackpotData={n3} shadedData={[0, 1]} />
                        </div>
                      </div>
                    </div>
                  )}
                  {!isShow && (
                    <div>
                      <JackpotContentHeader
                        backgroundColor="!bg-black-100 dark:!bg-black-500"
                        logoImage={magnum}
                        logoName="magnum"
                        title={magnumJackpot.name}
                      />
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

                            <NumbersMap jackpotData={n4} />
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

                          <NumbersMap jackpotData={n3} shadedData={[1]} />
                          <p className="text-center">+</p>
                          <NumbersMap jackpotData={n4} />
                        </div>
                        <div className="grid grid-cols-9 my-2 gap-2">
                          <NumbersMap jackpotData={n1} shadedData={[0]} />
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

                          <NumbersMap jackpotData={n4} />
                        </div>
                      </div>
                    </div>
                  )}

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
                  {!isShow && (
                    <div>
                      <JackpotContentHeader
                        backgroundColor="!bg-black-100 dark:!bg-black-500"
                        logoImage={magnum}
                        logoName="magnum"
                        title={magnumJackpot.name}
                        showButton={true}
                        handleClick={showGoldenNumber}
                      />
                      <div>
                        <NumbersHeader
                          isYellowBg={true}
                          title="Winning Numbers"
                        />
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
                        <NumbersHeader
                          isBlackBg={true}
                          title=" Bonus Numbers"
                        />
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
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
    </div>
  );
};
