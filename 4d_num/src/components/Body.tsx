import React from "react";
import Sidebar from "./Sidebar";

import { LuMenuSquare } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import special_draw from "../img/ball.png";
import branch_logo from "../img/magnum.svg";
import nav_icon from "../img/ball.png";
import logo from "../img/magnum.svg";
import { RxDividerVertical } from "react-icons/rx";

const Body = () => {
  return (
    <main>
      <section className="xl:block absolute top-0 -z-10 hidden bg-white w-full max-w-72 h-screen py-20 px-8 rounded-r-[60px]">
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

      <section className="xl:mx-[18%] lg:mx-[0.5%]  md:mx-[10%]">
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          <div className="bg-white rounded-3xl relative">
            <div className="relative bg-black flex justify-center md:rounded-t-3xl rounded-none pt-5 px-5 pb-12 rounded-b-[50px]">
              <div>
                <div className="">
                  <img src={branch_logo} alt="" />
                </div>
                <h1 className="text-white">Magnum 4D</h1>
              </div>
              <IoMdShare className="text-white absolute right-0 mx-5 text-xl" />
            </div>

            <div className="absolute bg-white top-32 w-[calc(100%-2.5rem)] left-1/2 -translate-x-1/2 flex gap-3 justify-around shadow-md rounded-xl p-3">
              <div className="text-center space-y-2">
                <h1 className="text-xs font-thin">Date</h1>
                <h1 className="font-bold text-sm">2024-06-23(Sun)</h1>
              </div>
              <div className="border-l-[0.5px] border-solid border-dark-grey my-2" />
              <div className="text-center space-y-2">
                <h1 className="text-xs font-thin">Draw No.</h1>
                <h1 className="font-bold text-sm">056/4</h1>
              </div>
            </div>

            <div className="space-y-5 pt-12 pb-5 px-5">
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-3">
                  <div className="bg-yellow shadow-md text-center rounded-md p-1 ">
                    <h1 className="font-thin text-nowrap text-lg">
                      <span className="font-bold">1ST</span> Prize
                    </h1>
                  </div>
                  <div className="flex items-start gap-2 bg-white shadow-md justify-center rounded-md p-1">
                    <h1 className="text-red-sports text-xs">F</h1>
                    <h1 className="font-bold text-xl">5288</h1>
                  </div>
                </div>
              </div>

              <div className="bg-black text-center text-white p-2 rounded-xl">
                Special
              </div>
              <div className="grid grid-cols-5">
                <div className="flex items-start gap-1 bg-white shadow-md justify-center rounded-md p-1">
                  <h1 className="text-red-sports text-xs">A</h1>
                  <h1>5288</h1>
                </div>
              </div>

              <div className="bg-black text-center text-white p-2 rounded-xl">
                4D Jack 1 Prize | 4D Jackpot 2 Prizw
              </div>
              <div className="grid grid-cols-5">
                <div className="flex items-start gap-1 bg-white shadow-md justify-center rounded-md p-1">
                  <h1 className="text-red-sports text-xs">A</h1>
                  <h1>5288</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:block absolute hidden top-1/2 bg-white w-full max-w-72 right-0 rounded-l-[60px] py-10">
        <div className="relative">
          <div className="text-center">
            <h1 className="font-bold text-dark-grey">Special Draw Date</h1>
            <h1 className="text-nowrap font-thin">
              Upcomping Special Draw Date
            </h1>
            <ul className="list-disc mx-10">
            <li>2024-06-25</li>
            <div className="border-t-2 border-solid border-dark-grey m-2" />
            <li>2024-06-25</li>
            <li>2024-06-25</li>
            <li>2024-06-25</li>
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
