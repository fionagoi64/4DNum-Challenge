import React, { useEffect } from "react";
import { Card } from "../components/Card";
import useFetchData from "../hooks/useFetchData";
import { sectionTitle } from "../data/sectionTitle";

const Home = () => {
  const { date, setDate, allData } = useFetchData(new Date());

  useEffect(() => {
    // Optionally, you can use setDate to update the date state
    // setDate(new Date());
  }, []);

  return (
    <Card allData={allData}>
      <div>
        {allData.map((all, allIndex) => {
          return (
            <div className="mt-12 mb-8 mx-5">
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
                    ndata.startsWith("n") &&
                    !ndata.endsWith("_pos") &&
                    index < 5
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
                  <div key={titleIndex}>
                    {titleItem.includes("1st") && nData !== null ? (
                      <div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className={`${all.prize} prize`}>
                            <h1>
                              {titleItem[0]}
                              <span> Prize</span>
                            </h1>
                          </div>
                          <div className={`${all.prize} prize`}>
                            <h1>
                              {titleItem[1]}
                              <span> Prize</span>
                            </h1>
                          </div>
                          <div className={`${all.prize} prize`}>
                            <h1>
                              {titleItem[2]}
                              <span> Prize</span>
                            </h1>
                          </div>
                        </div>
                        <div className={`grid ${cols} gap-2 mt-2 mb-5`}>
                          {nData.map((nItem) => (
                            <div className="relative bg-white dark:border-[0.2px] dark:border-gray-400 dark:bg-black-200 text-black-300 dark:text-white shadow-md rounded-md text-center">
                              <p className="absolute text-[8px] font-medium text-red-100 px-[3px]">
                                {all.fdData[`${nItem}_pos`]}
                              </p>
                              <h1 className="text-xl font-medium py-[1px]">
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
                            className={`${all.bg} ${all.others}  text-center rounded-xl py-2`}
                          >
                            {titleItem}
                          </div>
                          <div className={`grid ${cols} gap-2 mt-2 mb-5`}>
                            {othersData.map((othersItem, otherIndex) => (
                              <div className="relative dark:border-[0.2px] dark:border-gray-400 bg-white dark:bg-black-200 text-black-300 dark:text-white shadow-md rounded-md text-center">
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
          );
        })}
      </div>
    </Card>
  );
};

export default Home;
