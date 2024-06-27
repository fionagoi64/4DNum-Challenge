import React, { useEffect, useState } from "react";
import axios from "axios";
import { LuMenuSquare } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import special_draw from "../img/ball.png";


//#region api connection
export const axiosPublic = axios.create({
  baseURL: "https://dev.backend.4dnum.com/",
});

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
  //#endregion

  const extraData = [
    {
      type: "M",
      name: "Magnum 4D",
      bg_color: "black",
      prize_color: "yellow",
      img_path: "magnum.svg",
    },
    {
      type: "PMP",
      name: "Da Mai Cai 1+3D",
      bg_color: "blue-indigo",
      prize_color: "red",
      img_path: "damacai2.svg",
    },
    {
      type: "ST",
      name: "Sports Toto 4D",
      bg_color: "red-sports",
      prize_color: "black",
      img_path: "toto.svg",
    },
    {
      type: "SG",
      name: "Singapore 4D",
      bg_color: "blue-sg",
      prize_color: "blue-indigo",
      img_path: "sg.svg",
    },
    {
      type: "STC",
      name: "Sandakan 4D",
      bg_color: "yellow",
      prize_color: "green",
      img_path: "sandakan.svg",
    },
    {
      type: "EE",
      name: "Sabah 88 4D",
      bg_color: "red-sports",
      prize_color: "blue-perdana",
      img_path: "diriwan2.svg",
    },
    {
      type: "CS",
      name: "Special CashSweep",
      bg_color: "green-special",
      prize_color: "red",
      img_path: "ssc.svg",
    },
    {
      type: "HT15:30",
      name: "Lucky Hari Hari",
      bg_color: "blue-lucky",
      prize_color: "blue-indigo",
      img_path: "lhh.svg",
    },
    {
      type: "PT15:30",
      name: "Perdana Lottery",
      bg_color: "blue-indigo",
      prize_color: "red",
      img_path: "Perdana_svg.svg",
    },
    {
      type: "GD",
      name: "Grand Dragon 4D",
      bg_color: "red-sports",
      prize_color: "yellow",
      img_path: "gd.svg",
    },
  ];

  //#region ../result/date
  const [date, setDate] = useState(new Date());
  const [apiData, setApiData] = useState<any[]>([]);
  const [allData, setAllData] = useState<any[]>([]);

  const getResult = async (selectedDate: Date) => {
    try {
      const formattedDate = selectedDate.toISOString().split("T")[0]; //YYYY-MM-DD
      axiosPublic
        .get(`/${API_V1}/result/${formattedDate}`)
        .then((res) => {
          setApiData(res.data);
         
        })
       
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getResult(date);
  }, [date]);

 

  useEffect(() => {
    const AllData = apiData.map((eachData) => {
      const all = extraData.find((item)=>item.type === eachData.type)
      return  {...eachData, ...all};
    })
    setAllData(AllData);
    console.log(AllData);
  },[apiData, extraData]);

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
          console.log(res);
        })
        .then((data) => console.log(data))
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
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <section className="xl:mx-[330px] lg:mx-[20px] md:mx-[60px]">
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-2">
          {allData.map((item, index) => {
            // const differentLayout = item.name=== '4D'
            return(
            <div
              key={index}
              className="bg-white rounded-3xl md:h-auto h-screen relative"
            >
              <div className={`relative bg-${item.bg_color} flex justify-center md:rounded-t-3xl rounded-none pt-5 px-5 pb-12 rounded-b-[50px]`}>
                <div>
                  <div className="">
                    {/* <div className="w-[70px] h-[70px] mx-auto bg-white rounded-full"/> */}
                    <img className="w-[65px] h-[65px] mx-auto" src={`https://dev.backend.4dnum.com/${publicImage}${item.img_path}`}  alt="" />
                  </div>
                  <h1 className="text-white">{item.name}</h1>
                </div>
                <button className=" absolute right-0 mx-5 ">
                  <IoMdShare className="text-white text-xl" />
                </button>
              </div>

              <div className="absolute bg-white top-32 w-[calc(100%-2.5rem)] left-1/2 -translate-x-1/2 flex gap-3 justify-around shadow-md rounded-xl p-3">
                <div className="text-center space-y-2">
                  <h1 className="text-xs font-thin">Date</h1>
                  <h1 className="font-bold text-sm">
                    {item.fdData.dd}
                    {"("}
                    {item.fdData.day}
                    {")"}
                  </h1>
                </div>
                <div className="border-l-[0.5px] border-solid border-dark-grey my-2" />
                <div className="text-center space-y-2">
                  <h1 className="text-xs font-thin">Draw No.</h1>
                  <h1 className="font-bold text-sm">{item.fdData.dn}</h1>
                </div>
              </div>

              <div className="space-y-5 pt-12 pb-5 px-5">
                <div className="grid grid-cols-3 gap-3">
                  {prize.map((place, index) => (
                    <div className={`bg-yellow shadow-md text-center rounded-md px-1 py-2`}>
                      <h1 className="font-thin text-nowrap text-lg">
                        <span key={index} className="font-bold uppercase">
                          {place}{" "}
                        </span>
                        Prize
                      </h1>
                    </div>
                  ))}

                  {item.fdData && (
                    <div className=" bg-white shadow-md  rounded-md px-1 py-2">
                      {item.fdData.c1 && (
                        <div className="flex items-start gap-2 justify-center">
                          <h1 className="text-red-sports text-xs">A</h1>
                          <h1 className="font-bold text-xl">
                            {item.fdData.c1}
                          </h1>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className={`bg-${item.bg_color} text-center text-white p-2 rounded-xl`} >
                  Special
                </div>
                <div className="grid grid-cols-5">
                  <div className="flex items-start gap-1 bg-white shadow-md justify-center rounded-md p-1">
                    <h1 className="text-red-sports text-xs">A</h1>
                    <h1>5288</h1>
                  </div>
                </div>
                
              </div>
            </div>
          )})}
        </div>
      </section>

      <section className="xl:block fixed hidden top-1/2 bg-white w-full max-w-72 right-0 rounded-l-[60px] py-10">
        <div className="relative">
          <div className="text-center">
            <h1 className="font-bold text-dark-grey">Special Draw Date</h1>
            <h1 className="text-nowrap font-thin">
              Upcomping Special Draw Date
            </h1>
            <ul className="list-disc mx-auto">
              {specialDraw.map((item, index) => (
                <li key={index}>
                  <h1>{item}</h1>
                  <div className="border-t-2 border-solid border-dark-grey m-2" />
                </li>
              ))}
            </ul>
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
