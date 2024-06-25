import React from "react";
import logo from "../img/magnum.svg";
import { RxDividerVertical } from "react-icons/rx";

const Main = () => {
  return (
    <main className="md:m-5">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-white relative rounded-3xl w-full">
          <div className="bg-black rounded-b-[40px] md:rounded-t-3xl px-6 pt-3 pb-10 text-center">
            <img src={logo} alt="" className="block mx-auto" />
            <h1 className="text-white font-bold text-xl">Magnum 4D</h1>
          </div>
          <div className="absolute flex top-1/4 bg-white rounded-2xl p-4 items-center space-x-5 shadow-lg">
            <div className="text-center">
              <h1>Date</h1>
              <h1>2024-06-23 (Sun)</h1>
            </div>

            <RxDividerVertical />

            <div className="text-center">
              <h1>Draw No.</h1>
              <h1>056/24</h1>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 p-5 mt-8">
            <div className="space-y-3">
              <h1 className="bg-yellow rounded-lg shadow-lg text-center py-2">
                <span className="uppercase font-bold ">1st </span>Prize
              </h1>
              <h1 className="bg-white rounded-lg shadow-lg px-1 text-center py-2">
                5288
              </h1>
            </div>
          </div>
          <div className="mx-5">
            <h1 className="bg-black w-full text-white text-center rounded-xl py-2 font-bold">
              Special
            </h1>
            <div className="grid grid-cols-5 my-5">
              <div>
                <h1 className="bg-white rounded-lg shadow-lg px-1 text-center py-2">
                  <span className="text-red-sports text-xs align-top">A</span>{" "}
                  5288
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
