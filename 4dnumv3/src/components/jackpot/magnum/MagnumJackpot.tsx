import React, { useEffect, useState } from "react";
import magnum from "../../../assets/images/branches/magnum-border.svg";
import { JackpotContentHeader } from "../shared/JackpotContentHeader";
import { API_V1, axiosPublic } from "../../../const/apiData";
import { NumbersHeader } from "../shared/NumbersHeader";
import { NumberBox } from "../shared/NumberBox";
import { NumbersMap } from "../shared/NumbersMap";
import { useTranslation } from "react-i18next";

interface MagnumJackpotProps {
  selectedDate: Date;
  isShow: boolean;
  handleClick: () => void;
}

const localMagnum = [
  { type: "MJPLIFE", name: "magnumLife" },
  { type: "MJPGOLD", name: "goldJackpot" },
];

export const MagnumJackpot: React.FC<MagnumJackpotProps> = ({
  selectedDate,
  isShow,
  handleClick,
}) => {
  const [apiData, setApiData] = useState<any[]>([]);
  const [allData, setAllData] = useState<any[]>([]);
  const { t } = useTranslation();

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
      )
      .map((apiItem) => {
        const all = localMagnum.find(
          (localItem) => localItem.type === apiItem.type
        );
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

          const n2Data = magnumJackpot.fdData.n2;
          const n2 = Array.from(n2Data);

          const n3Data = magnumJackpot.fdData.n3;
          const n3 = Array.from(n3Data);

          const n4Data = magnumJackpot.fdData.n4;
          const n4 = Array.from(n4Data);

          return (
            <div key={`${magnumJackpot.type}-${magnumIndex}`}>
              {isGoldenJackpot && (
                <>
                  {isShow && (
                    <div>
                      <div className="flex flex-row gap-2 text-center my-2">
                        <NumbersHeader
                          className="w-1/2 !font-medium"
                          isYellowBg={true}
                          title={t("goldenNumber")}
                        />
                        <div className="w-2/3 flex flex-row gap-2">
                          <NumbersMap jackpotData={n4} className="p-2" />
                        </div>
                      </div>
                      <div>
                        <NumbersHeader
                          isBlackBg={true}
                          title={t("third") + t("prize")}
                        />
                        <div className="grid grid-cols-6 gap-2 my-2">
                          {Object.keys(magnumJackpot.fdData)
                            .filter((key) => key.startsWith("n"))
                            .slice(0, 3)
                            .map((numbers, index) => {
                              const winner = magnumJackpot.fdData[numbers];
                              const splitArray = Array.from(winner);

                              return (
                                <React.Fragment key={`${numbers}-${index}`}>
                                  {splitArray.map((item, idx) => (
                                    <NumberBox
                                      key={`${numbers}-${idx}`}
                                      number={item as React.ReactNode}
                                    />
                                  ))}
                                </React.Fragment>
                              );
                            })}
                        </div>
                      </div>
                      <div>
                        <NumbersHeader
                          isBlackBg={true}
                          title={t("fourth") + t("prize")}
                        />
                        <div className="flex flex-row items-center gap-2">
                          <div className="grid grid-cols-6 gap-1 my-2 w-full">
                            <NumbersMap jackpotData={n1} />
                            <NumbersMap jackpotData={n2} />
                            <NumbersMap jackpotData={n3} shadedData={[1]} />
                          </div>
                          <div className="border-l border-gray-300 h-4" />
                          <div className="grid grid-cols-6 gap-1 my-2 w-full">
                            <NumbersMap jackpotData={n1} shadedData={[0]} />
                            <NumbersMap jackpotData={n2} />
                            <NumbersMap jackpotData={n3} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <NumbersHeader
                          isBlackBg={true}
                          title={t("fifth") + t("prize")}
                        />
                        <div className="flex flex-row items-center gap-2">
                          <div className="grid grid-cols-6 gap-1 my-2 w-full">
                            <NumbersMap jackpotData={n1} />
                            <NumbersMap jackpotData={n2} />
                            <NumbersMap jackpotData={n3} shadedData={[0, 1]} />
                          </div>
                          <div className="border-l border-gray-300 h-4" />
                          <div className="grid grid-cols-6 gap-1 my-2 w-full">
                            <NumbersMap jackpotData={n1} shadedData={[0, 1]} />
                            <NumbersMap jackpotData={n2} />
                            <NumbersMap jackpotData={n3} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <NumbersHeader
                          isBlackBg={true}
                          title={t("sixth") + t("prize")}
                        />
                        <div className="flex flex-row items-center gap-2">
                          <div className="grid grid-cols-6 gap-1 my-2 w-full">
                            <NumbersMap jackpotData={n1} />
                            <NumbersMap jackpotData={n2} shadedData={[1]} />
                            <NumbersMap jackpotData={n3} shadedData={[0, 1]} />
                          </div>
                          <div className="border-l border-gray-300 h-4" />
                          <div className="grid grid-cols-6 gap-1 my-2 w-full">
                            <NumbersMap jackpotData={n1} shadedData={[0, 1]} />
                            <NumbersMap jackpotData={n2} shadedData={[0]} />
                            <NumbersMap jackpotData={n3} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <NumbersHeader
                          isBlackBg={true}
                          title={t("seventh") + t("prize")}
                        />
                        <div className="flex flex-row items-center gap-2">
                          <div className="grid grid-cols-6 gap-1 my-2 w-full">
                            <NumbersMap jackpotData={n1} />
                            <NumbersMap jackpotData={n2} shadedData={[0, 1]} />
                            <NumbersMap jackpotData={n3} shadedData={[0, 1]} />
                          </div>
                          <div className="border-l border-gray-300 h-4" />
                          <div className="grid grid-cols-6 gap-1 my-2 w-full">
                            <NumbersMap jackpotData={n1} shadedData={[0, 1]} />
                            <NumbersMap jackpotData={n2} shadedData={[0, 1]} />
                            <NumbersMap jackpotData={n3} />
                          </div>
                        </div>
                        <div className="flex justify-center mx-[22%] gap-2 mb-2">
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
                        title={t(magnumJackpot.name)}
                        showButton={true}
                        handleClick={handleClick}
                      />
                      <div>
                        <NumbersHeader
                          isYellowBg={true}
                          title={t("jackpotOne")}
                        />
                        <div>
                          <div className="grid grid-cols-9 my-2 gap-2">
                            {Object.keys(magnumJackpot.fdData)
                              .filter((key) => key.startsWith("n"))
                              .slice(0, 3)
                              .map((numbers, index) => {
                                const winner = magnumJackpot.fdData[numbers];
                                const splitArray = Array.from(winner);
                                return (
                                  <React.Fragment key={`${numbers}-${index}`}>
                                    {splitArray.map((item, idx) => (
                                      <NumberBox
                                        key={`${numbers}-${idx}`}
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
                        <NumbersHeader
                          isYellowBg={true}
                          title={t("jackpotTwo")}
                        />
                        <div className="grid grid-cols-9 my-2 gap-2">
                          {Object.keys(magnumJackpot.fdData)
                            .filter((key) => key.startsWith("n"))
                            .slice(0, 2)
                            .map((numbers, index) => {
                              const winner = magnumJackpot.fdData[numbers];
                              const splitArray = Array.from(winner);
                              return (
                                <React.Fragment key={`${numbers}-${index}`}>
                                  {splitArray.map((item, idx) => (
                                    <NumberBox
                                      key={`${numbers}-${idx}`}
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
                            .map((numbers, index) => {
                              const winner = magnumJackpot.fdData[numbers];
                              const splitArray = Array.from(winner);

                              return (
                                <React.Fragment key={`${numbers}-${index}`}>
                                  {splitArray.map((item, idx) => (
                                    <NumberBox
                                      key={`${numbers}-${idx}`}
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
                      title={t("goldJackpotOnePrize")}
                      secondTitle={t("goldJackpotTwoPrize")}
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
                        title={t(magnumJackpot.name)}
                      />
                      <div>
                        <NumbersHeader
                          isYellowBg={true}
                          title={t("winningNumbers")}
                        />
                        <div className="grid grid-cols-8 my-2 gap-2">
                          {Object.keys(magnumJackpot.fdData)
                            .filter((nData) => nData.startsWith("n"))
                            .slice(0, 8)
                            .map((numbers, index) => {
                              const winner = magnumJackpot.fdData[numbers];
                              return (
                                <NumberBox
                                  key={`${numbers}-${index}`}
                                  number={winner}
                                />
                              );
                            })}
                        </div>
                      </div>
                      <div>
                        <NumbersHeader
                          isBlackBg={true}
                          title={t("bonusNumbers")}
                        />
                        <div className="grid grid-cols-2 my-2 gap-2">
                          {Object.keys(magnumJackpot.fdData)
                            .filter((nData) => nData.startsWith("n"))
                            .slice(8, 10)
                            .map((numbers, index) => {
                              const winner = magnumJackpot.fdData[numbers];
                              return (
                                <NumberBox
                                  key={`${numbers}-${index}`}
                                  number={winner}
                                />
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
