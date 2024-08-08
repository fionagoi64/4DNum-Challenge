import React, { useEffect, useState } from "react";
import { CardContent } from "../../cards/CardContent";
import { sectionTitle } from "../../../data/sectionTitle";
import { localData } from "../../../data/localData";
import { formatCurrency } from "../../../const/formatCurreny";
import { API_V1, axiosPublic } from "../../../const/apiData";

interface HomeProps {
  handleMenu: () => void;
  selectedDate: Date;
}

export const Home: React.FC<HomeProps> = ({ handleMenu, selectedDate }) => {
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
    const AllData = apiData
      .filter((selectedData) =>
        localData.some((extraItem) => extraItem.type === selectedData.type)
      ) // filter data where type is in localData
      .map((apiItem) => {
        const all = localData.find(
          (extraItem) => extraItem.type === apiItem.type
        ); // join apiData & localData
        return { ...apiItem, ...all };
      });
    setAllData(AllData);
  }, [apiData]);

  return (
    <CardContent allData={allData} handleMenu={handleMenu}>
      {(all) => {
        const magnum = all.type === "M";
        const damacai = all.type === "PMP";
        const sports = all.type === "ST";
        const singapore = all.type === "SG";
        const sandakan = all.type === "STC";
        const sabah = all.type === "EE";
        const special = all.type === "CS";
        const lucky = all.type === "HT15:30";
        const perdana = all.type === "PT15:30";

        return (
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

              if (fdLetter === "s") {
                othersData = othersData.filter((data) => data.startsWith("s"));
                othersData.splice(10, 0, " ");
                othersData.splice(15, 0, " ");
              }

              if (fdLetter === "jp") {
                isShow = othersData.length > 0;
              }

              return (
                <div id={all.id} key={titleIndex}>
                  {titleItem.includes("1st") && nData !== null ? (
                    <div>
                      <div className="grid grid-cols-3 gap-3">
                        <div
                          className={`text-center p-2 mb-3 rounded-xl font-bold text-lg 
                            ${magnum && "bg-yellow-100"}
                            ${damacai && "bg-red-100"}
                            ${sports && "bg-black-100 dark:bg-gray-600"}
                            ${singapore && "bg-blue-300"}
                            ${sandakan && "bg-green-100"}
                            ${sabah && "bg-blue-400"}
                            ${special && "bg-red-100"}
                            ${lucky && "bg-blue-300"}
                            ${perdana && "bg-red-100"}`}
                        >
                          <h1
                            className={`text-white-100 ${
                              magnum && "!text-black-100"
                            }`}
                          >
                            {titleItem[0]}
                            <span className="font-thin"> Prize</span>
                          </h1>
                        </div>
                        <div
                          className={`text-center p-2 mb-3 rounded-xl font-bold text-lg  
                          ${magnum && "bg-yellow-100"}
                            ${damacai && "bg-red-100"}
                            ${sports && "bg-black-100 dark:bg-gray-600"}
                            ${singapore && "bg-blue-300"}
                            ${sandakan && "bg-green-100"}
                            ${sabah && "bg-blue-400"}
                            ${special && "bg-red-100"}
                            ${lucky && "bg-blue-300"}
                            ${perdana && "bg-red-100"}`}
                        >
                          <h1
                            className={`text-white-100 
                              ${magnum && "!text-black-100"}`}
                          >
                            {titleItem[1]}
                            <span className="font-thin"> Prize</span>
                          </h1>
                        </div>
                        <div
                          className={`text-center p-2 mb-3 rounded-xl font-bold text-lg 
                          ${magnum && "bg-yellow-100"}
                            ${damacai && "bg-red-100"}
                            ${sports && "bg-black-100 dark:bg-gray-600"}
                            ${singapore && "bg-blue-300"}
                            ${sandakan && "bg-green-100"}
                            ${sabah && "bg-blue-400"}
                            ${special && "bg-red-100"}
                            ${lucky && "bg-blue-300"}
                            ${perdana && "bg-red-100"}`}
                        >
                          <h1
                            className={`text-white-100 ${
                              magnum && "!text-black-100"
                            }`}
                          >
                            {titleItem[2]}
                            <span className="font-thin"> Prize</span>
                          </h1>
                        </div>
                      </div>
                      <div className={`grid ${cols} gap-2 mt-2 mb-5`}>
                        {nData.map((nItem) => (
                          <div
                            key={nItem}
                            className="bg-white-100 dark:bg-black-400 relative border border-transparent dark:border-gray-700 shadow-all rounded-md text-center"
                          >
                            <p className="absolute text-[8px] font-medium !text-red-100 px-[3px]">
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
                          className={`
                            ${magnum && "bg-black-100 dark:bg-gray-600"} 
                            ${damacai && "bg-blue-300 dark:bg-purple-200"}
                            ${sports && "bg-red-100"}
                            ${singapore && "bg-blue-100"}
                            ${sandakan && "bg-yellow-100"}
                            ${sabah && "bg-red-200"}
                            ${special && "bg-green-200"}
                            ${lucky && "bg-blue-200"}
                            ${perdana && "bg-blue-400"}
                            text-center rounded-xl py-2`}
                        >
                          {titleItem.includes("4D Jackpot 1 Prize") ? (
                            <div className="flex items-center ">
                              <h1 className="flex-1 text-center text-white-100">
                                {titleItem[0]}
                              </h1>
                              <div className="border-l border-solid border-gray-500 h-4 "></div>
                              <h1 className="flex-1 text-center text-white-100">
                                {titleItem[1]}
                              </h1>
                            </div>
                          ) : (
                            <h1
                              className={`font-semibold text-white-100 
                                ${
                                  sandakan &&
                                  "!text-green-100 dark:!text-white-100"
                                }`}
                            >
                              {titleItem}
                            </h1>
                          )}
                        </div>
                        <div className={`grid ${cols} gap-2 mt-2 mb-5`}>
                          {othersData.map((othersItem, otherIndex) => (
                            <div
                              key={othersItem}
                              className="relative bg-card_numbers border border-transparent dark:border-gray-700 shadow-all rounded-md text-center"
                            >
                              <p className="absolute text-[8px] font-medium !text-red-100 px-[3px]">
                                {String.fromCharCode(alpha + otherIndex)}
                              </p>

                              {titleItem.includes("4D Jackpot 1 Prize") ||
                              fdLetter === "jp" ? (
                                <h1 className="py-1">
                                  {formatCurrency(
                                    Number(all.fdData[othersItem])
                                  )}
                                </h1>
                              ) : (
                                <h1 className="text-lg py-[1px]">
                                  {all.fdData[othersItem]}
                                </h1>
                              )}
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
        );
      }}
    </CardContent>
  );
};
