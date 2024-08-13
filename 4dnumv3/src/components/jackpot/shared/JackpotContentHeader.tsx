import React from "react";
import { IoIosInformationCircle } from "react-icons/io";

interface JackpotContentHeaderProps {
  logoImage: string;
  logoName: string;
  title: string;
  backgroundColor: string;
  isSingapore?: boolean;
  dd?: string;
  day?: string;
  dn?: string;
  showButton?: boolean;
  handleClick?: () => void;
}

export const JackpotContentHeader: React.FC<JackpotContentHeaderProps> = ({
  logoImage,
  logoName,
  title,
  backgroundColor,
  isSingapore,
  dd,
  day,
  dn,
  showButton,
  handleClick,
}) => {
  return (
    <div
      className={`relative ${backgroundColor} text-center mb-2 py-2 rounded-t-[40px] rounded-b-lg 
      ${isSingapore && "!rounded-b-3xl"}`}
    >
      <div className="absolute mx-auto left-0 right-0 -top-8">
        <div className={`logos-bg !h-14 !w-14 mx-auto ${backgroundColor}`}>
          <img src={logoImage} alt={logoName} className="logos !h-12 !w-12" />
        </div>
      </div>
      {showButton && (
        <button className="absolute -top-8 right-0">
          <IoIosInformationCircle
            onClick={handleClick}
            className="text-2xl mb-3"
          />
        </button>
      )}
      <p
        className={`text-white-100 pt-4  
          ${isSingapore && "!pt-6 pb-28"} text-lg font-bold`}
      >
        {title}
      </p>

      {isSingapore && (
        <div id="card-date">
          <div className="absolute bg-white-100 dark:bg-black-200  border border-transparent dark:border-gray-700  w-full bottom-0 shadow-all rounded-xl">
            <div className="flex flex-row rounded-2xl py-3 items-center">
              <div className="date self-start">
                <p className="font-thin text-[10px] dark:text-white-100 ">
                  Date
                </p>
                <p className="text-sm dark:text-white-100 font-bold uppercase">
                  {dd}
                  <br /> ({day})
                </p>
              </div>
              <div className="border-l-[0.2px] border-gray-300 h-8" />
              <div className="draw self-start">
                <p className="font-thin text-[10px] dark:text-white-100">
                  Draw No.
                </p>
                <p className="text-sm dark:text-white-100 font-bold">{dn}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
