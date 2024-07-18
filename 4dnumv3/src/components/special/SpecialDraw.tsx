import React, { useEffect, useState } from "react";
import { axiosPublic } from "../../data/apiData";
import { API_V1 } from "../../data/apiData";
import billiards from "../../assets/images/billiards.png";

const SpecialDraw = () => {
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

  const getDay = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <section className="hidden xl:block fixed bg-sidebarbg right-0 top-[40%] w-[300px] xl:w-[220px] rounded-l-[45px] z-40 ">
      <div className="relative text-center pt-8 pb-3">
        <img
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-[102px] h-auto"
          src={billiards}
          alt=""
        />
        <div>
          <h1 className="font-semibold text-[17px] text-dark-grey">
            Special Draw Date
          </h1>
          <p className="font-thin text-[15px]">Upcoming Special Draw Date</p>
          <ul className="my-5">
            {specialDraw.map((specialDrawItem, index) => {
              const day = getDay(specialDrawItem);

              return (
                <li key={index} className="font-thin text-sm">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <div className="bg-black rounded-full h-1 w-1" />
                    <p>
                      {specialDrawItem} {"("}
                      {day}
                      {")"}
                    </p>
                  </div>
                  <div className="border-t-2 border-solid border-gray-100 mx-3 my-2" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpecialDraw;
