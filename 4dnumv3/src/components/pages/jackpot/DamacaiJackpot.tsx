import React from "react";

export const DamacaiJackpot = () => {
  return (
    <>
      <div className="flex flex-row gap-2 text-center">
        <div className="bg-red-100 text-white w-[30%] rounded-lg p-2">1ST</div>
        <div className="bg-white w-[70%] font-bold p-2 shadow-all rounded-lg">
          685 149
        </div>
      </div>
      <div>
        <div className="bg-blue-400 text-white text-center font-bold p-2 rounded-lg">
          Special
        </div>
        <div className="grid grid-cols-3 my-3">
          <div className="shadow-all rounded-md text-center font-medium">
            16
          </div>
        </div>
      </div>
    </>
  );
};
