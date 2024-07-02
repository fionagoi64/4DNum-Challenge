import React from "react";
import share from "../images/webShare.svg";

type CardProps = {
//   type: string;
//   fdData: {
//     c: string;
//     day: string;
//     dd: string;
//     dn: string;
//     isLive: boolean;
//     isToday: boolean;
//     jackpotAmount: string;
//     jp: string;
//     n: string;
//     n_pos: string;
//     s: string;
//     videoUrl: string;
//   };
  img: string;
  branch: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="card bg-white w-full">
      <div className="bg-black">
        <div className="grid grid-cols-3 items-start">
          <div className="col-span-2 flex justify-end">
            <div className="flex flex-col items-center">
              <div className="img-bg">
                <img className="img" src={`${props.img}`} alt="" />
              </div>
              <p className="text-lg text-white">{props.branch}</p>
            </div>
          </div>
          <button className="flex justify-end">
            <img src={share} alt="" />
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md flex">
        <div className="flex-1 text-center">
          <p>Date</p>
          <p>{"props.fdData.dd"}{"("}{"props.fdData.day"}{")"}</p>
        </div>
        <div className="border-l-[0.5px] border-gray-200 h-3"/>
        <div className="flex-1 text-center">
          <p>Date</p>
          <p></p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Card;
