import React from "react";
import share from "../assets/images/share.svg";
import { BaseURL } from "../data/apiData";
import { publicImage } from "../data/apiData";

interface CardProps {
  children: React.ReactNode;
  allData: any[];
}

export const Card: React.FC<CardProps> = ({ children, allData }) => {
  return (
    <section className="">
      <div className="flex flex-wrap justify-center gap-2">
        {allData.map((all, allIndex) => (
          <div key={allIndex}>
            {/* branch name  */}
            <div
              className={`${all.bg} -mt-1 -mx-1 dark:border-4 ${all.dark} flex flex-row justify-between items-start p-4 pb-16 rounded-b-[60px] rounded-3xl`}
            >
              <div className="flex flex-grow justify-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="logos-bg">
                    <img
                      className="logos h-[60px] w-[60px]"
                      src={`${BaseURL}${publicImage}${all.img_path}`}
                      alt=""
                    />
                  </div>
                  <p>{all.name}</p>
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
                <p>
                  {" "}
                  {all.fdData.dd}
                  {"("}
                  {all.fdData.day}
                  {")"}
                </p>
              </div>
              <div className="border-l-[0.2px] border-gray-400 h-6" />
              <div className="date">
                <h6>Draw No.</h6>
                <p>{all.fdData.dn}</p>
              </div>
            </div>
            {children}
          </div>
        ))}
      </div>
    </section>
  );
};
