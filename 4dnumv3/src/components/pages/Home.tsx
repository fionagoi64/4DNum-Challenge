import React, { useEffect, useState } from "react";
import { axiosPublic } from "../../data/apiData";
import { API_V1 } from "../../data/apiData";
import { NumberContent } from "../cards/share/NumberContent";
import { sectionTitle } from "../../data/sectionTitle";
import { localData } from "../../data/localData";

interface HomeProps {
  handleMenu: () => void;
}

export const Home: React.FC<HomeProps> = ({ handleMenu }) => {
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

  const handleDateChange = () => {
    setDate(date);
  };
  // #endregion

  return (
    <NumberContent allData={allData} handleMenu={handleMenu}>
      {(all) => (
        <div id="card-numbers" className="px-5 pt-12 pb-1">
          {sectionTitle.map((titleItem, titleIndex) => {
            let fdLetter = "";
            let alpha = 0;
            let cols = "grid-cols-5";

            if (Array.isArray(titleItem) && titleItem.includes("1st")) {
              fdLetter = "n";
              alpha = 0;
              cols = "grid-cols-3";
            } else if (titleItem === "Special") {
              fdLetter = "s";
              alpha = 65;
            } else if (titleItem === "Consolation") {
              fdLetter = "c";
              alpha = 78;
            } else if (
              Array.isArray(titleItem) &&
              titleItem.includes("4D Jackpot 1 Prize")
            ) {
              fdLetter = "jp";
              cols = "grid-cols-2";
            }

            const fd = Object.keys(all.fdData);
            const nData = fd.filter(
              (ndata, index) =>
                ndata.startsWith("n") && !ndata.endsWith("_pos") && index < 5
            );
            let othersData = fd.filter(
              (others) =>
                others.startsWith(fdLetter) && !others.startsWith("count")
            );

            let isShow = true;

            if (fdLetter === "jp") {
              othersData = othersData.filter(
                (data) =>
                  (data.startsWith("jp1") || data.startsWith("jp2")) &&
                  all.fdData[data] !== 0 &&
                  all.fdData[data] !== "----"
              );
            }

            if (fdLetter === "jp") {
              isShow = othersData.length > 0;
            }

            return (
              <div id={all.id} key={titleIndex}>
                {titleItem.includes("1st") && nData !== null ? (
                  <div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="prize">
                        <h1>
                          {titleItem[0]}
                          <span> Prize</span>
                        </h1>
                      </div>
                      <div className="prize">
                        <h1>
                          {titleItem[1]}
                          <span> Prize</span>
                        </h1>
                      </div>
                      <div className="prize">
                        <h1>
                          {titleItem[2]}
                          <span> Prize</span>
                        </h1>
                      </div>
                    </div>
                    <div className={`grid ${cols} gap-2 mt-2 mb-5`}>
                      {nData.map((nItem) => (
                        <div
                          key={nItem}
                          className="relative bg-card_numbers border border-numbers_border shadow-all rounded-md text-center"
                        >
                          <p className="absolute text-[8px] font-medium text-red-100 px-[3px]">
                            {all.fdData[`${nItem}_pos`]}
                          </p>
                          <h1 className="text-2xl font-medium py-[1px]">
                            {all.fdData[nItem]}
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  isShow && (
                    <div>
                      <div
                        className={`title-color text-center rounded-xl py-2`}
                      >
                        {titleItem.includes("4D Jackpot 1 Prize") ? (
                          <div className="flex items-center">
                            <h1 className="flex-1 text-center text-white">
                              {titleItem[0]}
                            </h1>
                            <div className="border-l border-solid border-gray-500 h-4 "></div>
                            <h1 className="flex-1 text-center text-white">
                              {titleItem[1]}
                            </h1>
                          </div>
                        ) : (
                          <h1 className="text-white font-semibold">
                            {titleItem}
                          </h1>
                        )}
                      </div>
                      <div className={`grid ${cols} gap-2 mt-2 mb-5`}>
                        {othersData.map((othersItem, otherIndex) => (
                          <div
                            key={othersItem}
                            className="relative bg-card_numbers border border-numbers_border shadow-all rounded-md text-center"
                          >
                            <p className="absolute text-[8px] font-medium text-red-100 px-[3px]">
                              {String.fromCharCode(alpha + otherIndex)}
                            </p>
                            <h1 className="text-xl font-medium py-[1px]">
                              {all.fdData[othersItem]}
                            </h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            );
          })}
        </div>
      )}
    </NumberContent>
  );
};
