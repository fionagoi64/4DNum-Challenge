import React, { useEffect, useState } from "react";
import axios from "axios";
import { LuMenuSquare } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import special_draw from "../img/ball.png";

//#region api connection
export const axiosPublic = axios.create({
  baseURL: "https://dev.backend.4dnum.com/",
});

const BaseURL = "https://dev.backend.4dnum.com/";
const API_V1 = "api/v1";
const publicImage = "public/images/";

axiosPublic.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {}
);
//#endregion

const Body: React.FC = () => {
  //#region simple map
  const prize = ["1st", "2nd", "3rd"];
  const title = [
    "Special",
    "Consolation",
    ["4D Jackpot 1 Prize", "4D Jackpot 2 Prize"],
  ];
  //#endregion

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
  const [apiData, setApiData] = useState<Array<{[key: string]: string | number | { [key: string]: string | number }}>>([]);
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
      extraData.some((extraItem)=>extraItem.type === selectedData.type)) //filter data w type in extraData
    .map((apiItem) => {
      const all = extraData.find((extraItem) => extraItem.type === apiItem.type) //join apiData & extraData
      return { ...apiItem, ...all }
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
      <section className="xl:block fixed top-0 -z-10 hidden bg-white w-full max-w-72 h-screen py-20 px-8 rounded-r-[60px]">
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
                className="bg-white rounded-3xl md:h-auto h-screen relative"
              >
                <div
                  className={`relative ${allItem.bg} flex justify-center md:rounded-t-3xl rounded-none pt-5 px-5 pb-12 rounded-b-[50px]`}
                >
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

                <div className="absolute bg-white top-32 w-[calc(100%-2.5rem)] left-1/2 -translate-x-1/2 flex gap-3 justify-around shadow-md rounded-xl p-3">
                  <div className="text-center space-y-2">
                    <h1 className="text-xs font-thin">Date</h1>
                    <h1 className="font-bold text-sm">
                      {allItem.fdData.dd}
                      {"("}
                      {allItem.fdData.day}
                      {")"}
                    </h1>
                  </div>
                  <div className="border-l-[0.5px] border-solid border-dark-grey my-2" />
                  <div className="text-center space-y-2">
                    <h1 className="text-xs font-thin">Draw No.</h1>
                    <h1 className="font-bold text-sm">{allItem.fdData.dn}</h1>
                  </div>
                </div>

                <div className="space-y-5 pt-14 pb-5 px-5">
                  <div className="grid grid-cols-3 gap-3">
                    {prize.map((place, prizeIndex) => (
                      <div
                        key={prizeIndex}
                        className={`${allItem.prize} shadow-md text-center rounded-xl px-1 py-2`}
                      >
                        <h1 className="font-thin text-nowrap text-lg">
                          <span className="font-bold uppercase">{place} </span>
                          Prize
                        </h1>
                      </div>
                    ))}

                    {allItem.fdData && (
                      <div className=" bg-white shadow-md  rounded-xl px-1 py-2">
                        {allItem.fdData.c1 && (
                          <div className="flex items-start gap-2 justify-center">
                            <h1 className="text-red-sports text-xs">A</h1>
                            <h1 className="font-bold text-xl">
                              {allItem.fdData.c1}
                            </h1>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {title.map((titleItem, titleIndex) => {
                    //function
                    let cols = "grid-cols-5";
                    let letter = "";
                    let alpha = 0;
                    if (titleItem === "Special") {
                      letter = "s";
                      alpha = 65;
                    } else if (titleItem === "Consolation") {
                      letter = "c";
                      alpha = 78;
                    } else if ((titleItem = ["4DJackpot 1 Prize", ""])) {
                      cols = "grid-cols-2";
                      letter = "jp";
                    }

                    return (
                      <div>
                        <div
                          key={titleIndex}
                          className={`${allItem.bg} text-center p-2 mb-3 rounded-xl font-bold`}
                        >
                          {titleItem}
                        </div>

                        <div className={`grid ${cols} gap-2`}>
                          {Object.keys(allItem.fdData)
                            .filter((numbers) => {
                              return numbers.startsWith(letter);
                            })
                            .map((numbers, numbersIndex) => {
                              return (
                                <div className="flex items-start gap-1 bg-white shadow-md justify-center rounded-xl p-1">
                                  <h1 className="text-red-sports text-xs">
                                    {String.fromCharCode(alpha + numbersIndex)}
                                  </h1>
                                  <h1
                                    key={numbersIndex}
                                    className="font-medium text-lg"
                                  >
                                    {allItem.fdData[numbers]}
                                  </h1>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="xl:block fixed hidden top-1/2 bg-white w-full max-w-72 right-0 rounded-l-[60px] py-10">
        <div className="relative">
          <div className="text-center">
            <h1 className="font-bold text-dark-grey">Special Draw Date</h1>
            <h1 className="text-nowrap font-thin">
              Upcomping Special Draw Date
            </h1>
            {specialDraw.map((specialDrawItem, specialDrawIndex) => (
              <ul key={specialDrawIndex} className="list-disc mx-auto">
                <li>
                  <h1>{specialDrawItem}</h1>
                  <div className="border-t-2 border-solid border-dark-grey m-2" />
                </li>
              </ul>
            ))}
          </div>
        </div>
        <img
          src={special_draw}
          alt=""
          className="absolute -top-20 left-1/2 -translate-x-1/2"
        />
      </section>
    </main>
  );
};

export default Body;
