import React, { useEffect, useState } from "react";
import { axiosPublic } from "../data/apiData";
import { API_V1 } from "../data/apiData";
import ball from "../images/specialDraw.png";

const SpecialDraw = () => {

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

  return (
    <div className="relative bg-white px-1 pt-8 pb-5 rounded-l-[60px] text-center shadow-md w-[200px]">
      <img className="absolute -top-16 left-1/2 -translate-x-1/2 w-[102px] h-auto" src={ball} alt="" />
      <div>
        <h1 className="font-semibold text-[17px] text-dark-grey">Special Draw Date</h1>
        <p className="font-thin text-[15px]">Upcoming Special Draw Date</p>
        <ul className="my-5">
          {specialDraw.map((specialDrawItem, index) => {
            return (
              <li key={index} className="font-thin text-sm">
                <div className="flex flex-row items-center justify-center gap-2">
                  <div className="bg-black rounded-full h-1 w-1" />
                  <p>{specialDrawItem}</p>
                </div>
                <div className="border-t-2 border-solid border-light-grey my-2" />
              </li>)
          })}
        </ul>
      </div>
    </div >
  )
}

export default SpecialDraw