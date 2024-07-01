import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdShare } from "react-icons/io";
import { LuMenuSquare } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import special_draw from "../img/ball.png";

const BaseURL = "https://dev.backend.4dnum.com/";
const API_V1 = "api/v1";
const publicImage = "public/images/";

//#region api connection
export const axiosPublic = axios.create({
  baseURL: BaseURL,
});

axiosPublic.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) { }
);
//#endregion

const Body: React.FC = () => {
  const title = [
    ["1st", "2nd", "3rd"],
    "Special",
    "Consolation",
    ["4D Jackpot 1 Prize", "4D Jackpot 2 Prize"],
  ];

  const extraData = [
    {
      type: "M",
      name: "Magnum 4D",
      bg: "bg-black text-white",
      prize: "bg-yellow text-black",
      img_path: "magnum.svg",
    },
    {
      type: "PMP",
      name: "Da Mai Cai 1+3D",
      bg: "bg-blue-indigo text-white",
      prize: "bg-red-sports text-white",
      img_path: "damacai2.svg",
    },
    {
      type: "ST",
      name: "Sports Toto 4D",
      bg: "bg-red-sports text-white",
      prize: "bg-black text-white",
      img_path: "toto.svg",
    },
    {
      type: "SG",
      name: "Singapore 4D",
      bg: "bg-blue-sg text-white",
      prize: "bg-blue-indigo text-white",
      img_path: "sg.svg",
    },
    {
      type: "STC",
      name: "Sandakan 4D",
      bg: "bg-yellow text-green",
      prize: "bg-green text-white",
      img_path: "sandakan.svg",
    },
    {
      type: "EE",
      name: "Sabah 88 4D",
      bg: "bg-red-sabah text-white",
      prize: "bg-blue-perdana text-white",
      img_path: "diriwan2.svg",
    },
    {
      type: "CS",
      name: "Special CashSweep",
      bg: "bg-green-special text-white",
      prize: "bg-red-sports text-white",
      img_path: "ssc.svg",
    },
    {
      type: "HT15:30",
      name: "Lucky Hari Hari",
      bg: "bg-blue-lucky text-white",
      prize: "bg-blue-indigo text-white",
      img_path: "lhh.svg",
    },
    {
      type: "PT15:30",
      name: "Perdana Lottery",
      bg: "bg-blue-perdana text-white",
      prize: "bg-red-sports text-white",
      img_path: "Perdana%20svg.svg",
    },
    {
      type: "GD",
      name: "Grand Dragon 4D",
      bg: "bg-red-sports text-white",
      prize: "bg-yellow text-black",
      img_path: "gd.svg",
    },
  ];

  //#region ../result/date
  const [date, setDate] = useState(new Date());
  const [apiData, setApiData] = useState<
    Array<{
      [key: string]: string | number | { [key: string]: string | number };
    }>
  >([]);
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

  const handleDateChange = () => {
    setDate(date);
  };
  // #endregion

  //#region ../specialDraw

  const [specialDraw, setSpecialDraw] = useState<any[]>([]);

  useEffect(() => {
    try {
      axiosPublic
        .get(`/${API_V1}/specialDraw`)
        .then((res) => {
          setSpecialDraw(res.data);
          // console.log(res);
        })
        // .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  // #endregion

  return (
    <main>
      <section className="xl:block fixed top-0 z-10 hidden bg-white w-full max-w-[300px] h-screen py-5 px-8 rounded-r-[60px]">
        <div className="flex lg:hidden justify-end ">
        <button >
            <IoCloseOutline className="text-2xl m-2"/>
        </button>
        </div>
        <div>
          <h1 className="font-bold text-xs pt-4">Results</h1>
          <ul>
            <li className="flex gap-2 items-center py-3 hover:bg-light-grey hover:rounded-md">
              {/* <img src={nav_icon} alt="" /> */}
              <LuMenuSquare />
              <a href="/" className="text-sm text-dark-grey">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-xs pt-4">Install App</h1>
          <div className="flex items-center gap-2">
            <img src={`${BaseURL}${publicImage}`} alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <section className="xl:mx-[330px] lg:mx-[20px] md:mx-[60px] mt-20 mb-5">
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-2">
          {allData.map((allItem, allDataIndex) => {
            return (
              <div
                key={allDataIndex}
                className="bg-white rounded-3xl md:h-auto h-screen relative">
                <div
                  className={`relative ${allItem.bg} flex justify-center md:rounded-t-3xl rounded-none pt-5 px-5 pb-12 rounded-b-[50px]`}>
                  <div>
                    <div className="">
                      {/* <div className="w-[70px] h-[70px] mx-auto bg-white rounded-full"/> */}
                      <img
                        className="w-[65px] h-[65px] mx-auto"
                        src={`${BaseURL}${publicImage}${allItem.img_path}`}
                        alt=""
                      />
                    </div>
                    <h1 className="font-bold">{allItem.name}</h1>
                  </div>
                  <button className=" absolute right-0 mx-5 ">
                    <IoMdShare className="text-white text-xl" />
                  </button>
                </div>

                <div className="flex items-center bg-white rounded-xl shadow-md absolute top-32 w-[calc(100%-2.5rem)] left-1/2 -translate-x-1/2 p-3">
                  <div className="flex-1 text-center">
                    <h6 className="text-xs font-thin">Date</h6>
                    <h5 className="font-bold text-sm">
                      {" "}
                      {allItem.fdData.dd}
                      {"("}
                      {allItem.fdData.day}
                      {")"}
                    </h5>
                  </div>
                  <div className="border-l border-light-gray h-7" />
                  <div className="flex-1 text-center">
                    <h6 className="text-xs font-thin">Draw No.</h6>
                    <h5 className="font-bold text-sm"> {allItem.fdData.dn}</h5>
                  </div>
                </div>

                <div className="space-y-5 pt-14 pb-5 px-5">
                  {title.map((titleItem, titleIndex) => {
                    let cols = "grid-cols-5";
                    let fdLetter = "" ;
                    let alpha = 0;

                    if (Array.isArray(titleItem) && titleItem.includes("1st")) {
                      fdLetter = "n";
                      cols = "grid-cols-3";
                      alpha = 0
                    }
                    else if (titleItem === "Special") {
                      fdLetter = "s";
                      alpha = 65;
                    } else if (titleItem === "Consolation") {
                      fdLetter = "c";
                      alpha = 78;
                    } else if (Array.isArray(titleItem) && titleItem.includes("4D Jackpot 1 Prize")) {
                      cols = "grid-cols-2";
                      fdLetter = "jp";
                    }

                    return (
                      <div key={titleIndex}>
                        {titleItem.includes("1st") ? (
                          <div className="grid grid-cols-3 gap-3">
                            <div className={`${allItem.prize} text-center p-2 mb-3 rounded-xl font-bold`}>
                              <h1>{titleItem[0]}<span className="font-thin"> Prize</span></h1>
                            </div>
                            <div  className={`${allItem.prize} text-center p-2 mb-3 rounded-xl font-bold`}>
                              <h1>{titleItem[1]}<span className="font-thin"> Prize</span></h1>
                            </div>
                            <div  className={`${allItem.prize} text-center p-2 mb-3 rounded-xl font-bold`}>
                              <h1>{titleItem[2]}<span className="font-thin"> Prize</span></h1>
                            </div>
                          </div>) : (
                          <div className="grid grid-cols-1 gap-3">
                            <div className={`${allItem.bg} text-center p-2 mb-3 rounded-xl font-bold`}>
                              {
                                titleItem.includes("4D Jackpot 1 Prize") ? (
                                  <div className="flex items-center">
                                    <h1 className="flex-1 text-center">{titleItem[0]}</h1>
                                    <div className="border-l border-solid border-gray-500 h-4 "></div>
                                    <h1 className="flex-1 text-center">{titleItem[1]}</h1>
                                  </div>
                                ) : (
                                  <h1>{titleItem}</h1>
                                )}
                            </div>
                          </div>)

                        }

                        <div className={`grid ${cols} gap-2`}>
                          {fdLetter &&
                            allItem.fdData &&
                            Object.keys(allItem.fdData)
                              .filter((numbers) => numbers.startsWith(fdLetter))
                              .map((numbers, numbersIndex) => {
                                const value = allItem.fdData[numbers];

                                let isShow = true;

                                if ((fdLetter === "n" || fdLetter === "jp") && (value === "----" || value === 0 || value === null)) {
                                  isShow = false;
                                  
                                  return null;
                                } else if ((fdLetter === "c" || fdLetter === "sp") && value === null) {
                                  isShow = false;
                                  return null;
                                } 

                                return (isShow && (
                                  <div
                                    key={numbersIndex}
                                    className="flex items-start gap-1 bg-white shadow-md justify-center rounded-xl p-1">
                                    <h1 className="text-red-sports text-xs">
                                      {String.fromCharCode(alpha + numbersIndex)}
                                    </h1>
                                    <h1 className="font-medium text-lg">{value}</h1>
                                  </div>
                                )
                                );
                              })}
                        </div>
                      </div>
                    )
                  })}
                </div>

              </div>
            );
          })}
        </div>
      </section>

      <section className="xl:block fixed hidden top-1/2 bg-white w-full max-w-72 right-0 rounded-l-[60px] py-8">
        <div className="relative">
          <div className="text-center">
            <h1 className="font-bold text-dark-grey">Special Draw Date</h1>
            <h1 className="text-nowrap font-thin">
              Upcomping Special Draw Date
            </h1>
            {specialDraw.map((specialDrawItem, specialDrawIndex) => (
              <ul key={specialDrawIndex} >
                <li>
                  <div className="flex items-center justify-center gap-2">
                    <div className="rounded-full h-1 w-1 bg-light-gray"/>
                  <h1> {specialDrawItem}</h1>
                  </div>
                  <div className="border-t-2 border-solid border-light-grey mx-6 my-2" />
                </li>
              </ul>
            ))}
          </div>
        </div>
        <img
          src={special_draw}
          alt=""
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-[102px] h-auto"
        />
      </section>
    </main>
  );
};

export default Body;
