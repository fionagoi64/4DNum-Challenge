import React from "react";
import magnum from "../../../assets/images/branches/magnum-border.svg";

const MagnumJackpot = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-3">
        <div className="relative bg-black-100 text-center  p-2 rounded-t-[40px] rounded-b-lg">
          <div className="absolute mx-auto left-0 right-0 -top-8">
            <div className="logos-bg !h-14 !w-14 mx-auto !bg-black-100">
              <img src={magnum} alt="magnum" className="logos !h-12 !w-12" />
            </div>
          </div>
          <p className="text-white-100 pt-6 text-lg font-bold">Gold Jackpot</p>
        </div>
        <div>
          <div className="bg-yellow-100 text-black-100 text-center font-bold p-2 rounded-lg">
            Jackpot 1
          </div>
          <div className="grid grid-cols-8 my-3">
            <div className="shadow-all rounded-md text-center font-medium">
              01
            </div>
          </div>
        </div>

        <div>
          <div className="bg-black-100 text-center text-white-100 font-bold p-2 rounded-lg">
            Gold Jackpot
          </div>
          <div className="grid grid-cols-2 my-3">
            <div className="shadow-all rounded-md text-center font-medium">
              RM 8,313,000,00
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="relative bg-black-100 text-center p-2 rounded-t-[40px] rounded-b-lg">
          <div className="absolute mx-auto left-0 right-0 -top-8">
            <div className="logos-bg !h-14 !w-14 mx-auto !bg-black-100">
              <img src={magnum} alt="magnum" className="logos !h-12 !w-12" />
            </div>
          </div>
          <p className="text-white-100 pt-6 text-lg font-bold">Magnum Life</p>
        </div>
        <div>
          <div className="bg-yellow-100 text-black-100 text-center font-bold p-2 rounded-lg">
            Winning Numbers
          </div>
          <div className="grid grid-cols-8 my-3">
            <div className="shadow-all rounded-md text-center font-medium">
              01
            </div>
          </div>
        </div>

        <div>
          <div className="bg-black-100 text-center text-white-100 font-bold p-2 rounded-lg">
            Bonus Numbers
          </div>
          <div className="grid grid-cols-2 my-3">
            <div className="shadow-all rounded-md text-center font-medium">
              16
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagnumJackpot;
