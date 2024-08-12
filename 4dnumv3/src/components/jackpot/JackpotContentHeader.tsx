import React from "react";

interface JackpotContentHeaderProps {
  logoImage: string;
  logoName: string;
  title: string;
  backgroundColor: string;
  isSingapore?: boolean;
  dd?: string;
  day?: string;
  dn?: string;
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
      <p
        className={`text-white-100 pt-4  
          ${isSingapore && "!pt-6 pb-24"} text-lg font-bold`}
      >
        {title}
      </p>

      {isSingapore && (
        <div id="card-date">
          <div className="bg-white-100 absolute w-full bottom-0 shadow-all rounded-xl">
            <div className="flex flex-row rounded-2xl py-3 items-center">
              <div className="date self-start">
                <p className="font-thin text-[10px] dark:text-white-100 ">
                  Date
                </p>
                <p className="text-sm dark:text-white-100 font-bold uppercase px-10">
                  {dd} ({day})
                </p>
              </div>
              <div className="border-l-[0.2px] border-gray-300 h-8" />
              <div className="draw ">
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
