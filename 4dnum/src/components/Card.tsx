import React, { useEffect, useState } from "react";
import share from '../images/webShare.svg'
import { axiosPublic } from '../data/apiData';
import { API_V1 } from "../data/apiData";
import { BaseURL } from "../data/apiData";
import { publicImage } from "../data/apiData";
import { extraData } from "../data/extraData";
import { sectionTitle } from "../data/sectionTitle";

type CardProps = {
    cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
    selectedDate: Date;
};

const Card: React.FC<CardProps> = ({ cardRefs, selectedDate }) => {
    const [apiData, setApiData] = useState<any[]>([]);
    const [allData, setAllData] = useState<any[]>([]);

    // Fetch data based on selected date
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
        getResult(selectedDate); // Fetch data when selectedDate changes
    }, [selectedDate]);

    useEffect(() => {
        const AllData = apiData
            .filter((selectedData) =>
                extraData.some((extraItem) => extraItem.type === selectedData.type)
            ) //filter data w type in extraData
            .map((apiItem) => {
                const all = extraData.find(
                    (extraItem) => extraItem.type === apiItem.type
                ); //join apiData & extraData
                return { ...apiItem, ...all };
            });
        setAllData(AllData);
        console.log(AllData);
    }, [apiData]);

    useEffect(() => {
        // Initialize refs for all cards
        cardRefs.current = Array(allData.length).fill(null).map(
            (_, index) => cardRefs.current[index] || null
        );
    }, [allData.length]);

    return (
        <div className="flex flex-wrap justify-center gap-2">
            {
                allData.map((allItem, allDataIndex) => {
                    return (
                        <div key={allDataIndex} id={`card-${allDataIndex}`} ref={ref => cardRefs.current[allDataIndex] = ref} className={`card 2xl:w-[32%] xl:w-[45%] lg:w-[30%] md:w-[35%] w-full overflow-x-hidden relative rounded-3xl dark:border-4 ${allItem.dark}`}>
                            {/* branch name  */}
                            <div className={`${allItem.bg} dark:bg-black-100 -mt-1 -mx-1 dark:border-4 ${allItem.dark} flex flex-row justify-between items-start p-4 pb-16 rounded-b-[60px] rounded-3xl`}>
                                <div className="flex flex-grow justify-center">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="logos-bg">
                                            <img className="logos h-[60px] w-[60px]" src={`${BaseURL}${publicImage}${allItem.img_path}`} alt="" />
                                        </div>
                                        <p>{allItem.name}</p>
                                    </div>
                                </div>
                                <button>
                                    <img src={share} alt="" />
                                </button>
                            </div>
                            {/* date */}
                            <div className="background dark:border-[0.2px] dark:border-gray-400 absolute top-32 w-[calc(100%-2.5rem)] left-1/2 -translate-x-1/2 rounded-2xl shadow-md py-3 my-2 flex flex-row items-center">
                                <div className="date">
                                    <h6>Date</h6>
                                    <p> {" "}
                                        {allItem.fdData.dd}
                                        {"("}
                                        {allItem.fdData.day}
                                        {")"}</p>
                                </div>
                                <div className="border-l-[0.2px] border-gray-400 h-6" />
                                <div className="date">
                                    <h6>Draw No.</h6>
                                    <p>{allItem.fdData.dn}</p>
                                </div>
                            </div>

                            {/* dddd */}
                            <div className="mt-12 mb-8 mx-5">
                                {
                                    sectionTitle.map((titleItem, titleIndex) => {
                                        let fdLetter = "";
                                        let alpha = 0;
                                        let cols = "grid-cols-5";

                                        if (Array.isArray(titleItem) && titleItem.includes("1st")) {
                                            fdLetter = "n";
                                            alpha = 0
                                            cols = "grid-cols-3"
                                        }
                                        else if (titleItem === "Special") {
                                            fdLetter = "s";
                                            alpha = 65;
                                        } else if (titleItem === "Consolation") {
                                            fdLetter = "c";
                                            alpha = 78;
                                        } else if (Array.isArray(titleItem) && titleItem.includes("4D Jackpot 1 Prize")) {
                                            fdLetter = "jp";
                                            cols = "grid-cols-2"
                                        }

                                        const fd = Object.keys(allItem.fdData)
                                        const nData = fd.filter((ndata, index) => ndata.startsWith("n") && !ndata.endsWith("_pos") && index < 5)
                                        let othersData = fd.filter(others => others.startsWith(fdLetter) && !others.startsWith("count"))

                                        let isShow = true;

                                        if (fdLetter === "jp") {
                                            othersData = othersData.filter(data => (data.startsWith("jp1") || data.startsWith("jp2"))
                                                && (allItem.fdData[data] !== 0 && allItem.fdData[data] !== "----"))
                                        }

                                        if (fdLetter === "jp") {
                                            isShow = othersData.length > 0
                                        }

                                        return (
                                            <div key={titleIndex}>
                                                {titleItem.includes("1st") && nData !== null ?
                                                    <div>
                                                        <div className="grid grid-cols-3 gap-3">
                                                            <div className={`${allItem.prize} prize`}>
                                                                <h1>{titleItem[0]}<span> Prize</span></h1>
                                                            </div>
                                                            <div className={`${allItem.prize} prize`}>
                                                                <h1>{titleItem[1]}<span> Prize</span></h1>
                                                            </div>
                                                            <div className={`${allItem.prize} prize`}>
                                                                <h1>{titleItem[2]}<span> Prize</span></h1>
                                                            </div>
                                                        </div>
                                                        <div className={`grid ${cols} gap-2 mt-2 mb-5`}>
                                                            {nData.map(nItem =>
                                                            (<div className="relative bg-white dark:border-[0.2px] dark:border-gray-400 dark:bg-black-200 text-black-300 dark:text-white shadow-md rounded-md text-center">
                                                                <p className="absolute text-[8px] font-medium text-red-100 px-[3px]">{allItem.fdData[`${nItem}_pos`]}</p>
                                                                <h1 className="text-xl font-medium py-[1px]">{allItem.fdData[nItem]}</h1>
                                                            </div>)
                                                            )}
                                                        </div>
                                                    </div> :
                                                    (
                                                        isShow &&
                                                        (< div >
                                                            <div className={`${allItem.bg} ${allItem.others}  text-center rounded-xl py-2`}>
                                                                {titleItem}
                                                            </div>
                                                            <div className={`grid ${cols} gap-2 mt-2 mb-5`}>
                                                                {othersData.map((othersItem, otherIndex) =>
                                                                (<div className="relative dark:border-[0.2px] dark:border-gray-400 bg-white dark:bg-black-200 text-black-300 dark:text-white shadow-md rounded-md text-center">
                                                                    <p className="absolute text-[8px] font-medium text-red-100 px-[3px]">{String.fromCharCode(alpha + otherIndex)}</p>
                                                                    <h1 className="text-xl font-medium py-[1px]">{allItem.fdData[othersItem]}</h1>
                                                                </div>)
                                                                )}
                                                            </div>
                                                        </div>)
                                                    )
                                                }
                                            </div>)
                                    })
                                }
                            </div>
                        </div >)
                })
            }
        </div>
    )
}

export default Card;

