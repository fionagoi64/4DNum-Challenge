import React from "react";

const MagnumJackpot = () => {
  return (
    <>
      <div>
        <div className="bg-yellow text-center font-bold p-2 rounded-lg">
          Winning Numbers
        </div>
        <div className="grid grid-cols-8 my-3">
          <div className="shadow-all rounded-md text-center font-medium">
            01
          </div>
        </div>
      </div>

      <div>
        <div className="bg-black-100 text-center font-bold p-2 rounded-lg">
          Bonus Numbers
        </div>
        <div className="grid grid-cols-2 my-3">
          <div className="shadow-all rounded-md text-center font-medium">
            16
          </div>
        </div>
      </div>
    </>
  );
};

export default MagnumJackpot;
