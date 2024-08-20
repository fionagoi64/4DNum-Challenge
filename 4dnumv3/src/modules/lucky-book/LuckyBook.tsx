import React from "react";
import { CardB } from "../../components/cards/CardB";
import { luckybook } from "../../data/luckybook";
import { IoSend } from "react-icons/io5";

export const LuckyBook = () => {
  return (
    <CardB title="Lucky Book">
      <div>
        <div className="flex flex-row gap-2 -mt-6 justify-center">
          <button className="rounded-lg py-4 px-3 bg-gray-200 text-white-100 text-sm leading-none">
            Search
          </button>
        </div>
        <div className="flex flex-row justify-evenly">
          {luckybook.map((item, index) => {
            return (
              <a href={item.route}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    key={index}
                    className="bg-purple-300 flex flex-col items-center py-3 h-full "
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-auto max-w-48 "
                      />
                      <img
                        src={item.imageText}
                        alt=""
                        className="absolute top-2 w-full h-auto max-w-48"
                      />
                    </div>
                    <div
                      className={`text-center opacity-60 ${
                        item.shortName === "GZT" ? "" : "w-3/4"
                      }`}
                    >
                      <h1 className="text-white-100 py-5 text-sm">
                        {item.name}
                      </h1>
                      <h1 className="text-white-100 text-sm">
                        ({item.shortName})
                      </h1>
                    </div>
                  </div>

                  <button className="flex flex-row items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                    <span className="uppercase text-brown-100">enter</span>
                    <IoSend />
                  </button>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </CardB>
  );
};
