import React from "react";
import { CardB } from "../cards/CardB";
import zero from "../../assets/images/lucky-book/tua-pek-kong-wan/0000.png";

export const TuaPekKongWan = () => {
  return (
    <CardB className="!bg-transparent" title="Tua Pek Kong (Wan) Dictionary">
      <div className="grid grid-cols-4">
        <div className="flex flex-col items-center gap-2 bg-white-100">
          <div className="text-2xl font-black mt-1 border-2 rounded-2xl w-full text-center">
            0000
          </div>
          <img src={zero} alt="" className="rounded-2xl" />
          <div className="uppercase">star light</div>
        </div>
      </div>
    </CardB>
  );
};
