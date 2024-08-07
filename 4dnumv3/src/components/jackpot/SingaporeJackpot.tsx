import React from "react";

const SingaporeJackpot = () => {
  return (
    <div>
      <div className="bg-blue-400 text-white text-center font-bold p-2 rounded-lg">
        Winning Numbers
      </div>
      <div className="grid grid-cols-6 my-3">
        <div className="shadow-all rounded-md text-center font-medium">01</div>
      </div>
      <div className="flex flex-row gap-2 text-center">
        <div className="w-[20%] bg-blue-100 text-white">Prize Group</div>
        <div className="w-[40%] bg-blue-100">Share Amount</div>
        <div className="w-[40%] bg-blue-100">Winning Shares</div>
      </div>
      <div className="flex flex-row gap-2 text-center">
        <div className="w-[20%] bg-blue-400 text-white">1</div>
        <div className="w-[40%]">$2,934,077</div>
        <div className="w-[40%]">2</div>
      </div>
    </div>
  );
};

export default SingaporeJackpot;
