import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface CardProps {
  children: (all: any) => React.ReactNode;
  allData: any[];
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export const Card: React.FC<CardProps> = ({ children, allData, cardRefs }) => {
  return (
    <>
      <div className="bg-white-400 dark:bg-black-500 md:py-20">
        <section id="card">
          {/* web view */}
          <div className="md:flex hidden flex-wrap justify-center gap-2 container mx-auto xl:max-w-screen-md 2xl:max-w-screen-xl">
            {allData.map((all, allIndex) => {
              const magnum = all.type === "M";
              const damacai = all.type === "PMP";
              const sports = all.type === "ST";
              const singapore = all.type === "SG";
              const sandakan = all.type === "STC";
              const sabah = all.type === "EE";
              const special = all.type === "CS";
              const lucky = all.type === "HT15:30";
              const perdana = all.type === "PT15:30";

              return (
                <div
                  key={allIndex}
                  id={`card-${allIndex}`}
                  ref={(ref) => (cardRefs.current[allIndex] = ref)}
                  className={`bg-white-100 dark:bg-black-100 border-4 border-transparent dark: relative rounded-[20px] w-[48%] lg:w-[31%] xl:w-[48%] 2xl:w-[31%]
                    ${magnum && "dark:border-yellow-100"}
                    ${damacai && "dark:border-purple-200"}
                    ${sports && "dark:border-red-100"}
                    ${singapore && "dark:border-blue-100"}
                    ${sandakan && "dark:border-yellow-100"}
                    ${sabah && "dark:border-red-200"}
                    ${special && "dark:border-green-200"}
                    ${lucky && "dark:border-blue-200"}
                    ${perdana && "dark:border-blue-400"}`}
                >
                  {children(all)}
                </div>
              );
            })}
          </div>

          {/* mobile view */}
          <div className="md:hidden">
            <Swiper>
              {allData.map((all, allIndex) => (
                <SwiperSlide key={allIndex}>
                  <div id="card-body" className="body h-screen relative">
                    {children(all)}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
};
