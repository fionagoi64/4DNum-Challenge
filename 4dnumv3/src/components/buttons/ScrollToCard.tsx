import React from "react";
import { getImageUrl } from "../../data/imgPath";
import { localData } from "../../data/localData";

export const ScrollToCard: React.FC = () => {
  return (
    <div className="bg-navitem rounded-b-3xl md:rounded-[20px] shadow-all">
      <ul className="flex flex-row pt-4 pb-2 px-3 xl:py-1 xl:px-14 md:py-2 md:px-5 lg:gap-1 justify-between items-center">
        {localData.map((localItem, localIndex) => {
          return (
            <li key={localIndex}>
              <button>
                <img
                  className="h-8 w-8 md:h-7 md:w-7 lg:h-8 lg:w-8"
                  src={getImageUrl(localItem.nav)}
                  alt=""
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ScrollToCard;
