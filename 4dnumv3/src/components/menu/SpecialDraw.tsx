import React, { useEffect, useState } from "react";
import billiards from "../../assets/images/billiards.png";
import { API_V1, axiosPublic } from "../../const/apiData";
import { useTranslation } from "react-i18next";

export const SpecialDraw = () => {
  const { t } = useTranslation();
  const [specialDraw, setSpecialDraw] = useState<any[]>([]);

  useEffect(() => {
    try {
      axiosPublic
        .get(`/${API_V1}/specialDraw`)
        .then((res) => {
          setSpecialDraw(res.data);
        })
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
    <section className="hidden xl:block fixed bg-white-100 dark:bg-gray-800 right-0 top-[40%] xl:w-[220px] 2xl:w-[300px] rounded-l-[45px] z-40 ">
      <div className="relative text-center pt-8 pb-3">
        <img
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-[102px] h-auto"
          src={billiards}
          alt=""
        />
        <div className="">
          <h1 className="font-semibold text-[17px] text-gray-700 dark:text-white-100">
            {t("specialDrawDate")}
          </h1>
          <p className="font-thin text-[15px] text-gray-700 dark:text-white-100">
            {t("upcomingSpecialDrawDate")}
          </p>
          <ul className="my-5">
            {specialDraw.map((specialDrawItem, index) => {
              const day = getDay(specialDrawItem);

              return (
                <li key={index} className="font-thin text-sm ">
                  <div className="flex flex-row items-center justify-center gap-2 ">
                    <div className="bg-gray-400 dark:bg-white-100 rounded-full h-[3px] w-[3px]" />
                    <p className="text-gray-700 dark:text-white-100">
                      {specialDrawItem} {"("}
                      {day}
                      {")"}
                    </p>
                  </div>
                  <div className="border-t-2 border-solid mx-3 my-2 border-white-400 dark:border-gray-400" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
