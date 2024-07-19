import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface NumberCardProps {
  children: (all: any) => React.ReactNode;
  allData: any[];
}

export const NumberCard: React.FC<NumberCardProps> = ({
  children,
  allData,
}) => {
  return (
    <>
      <div className="sticky top-0 bg-background z-20 h-20 hidden md:block"></div>
      <section id="card">
        {/* web view */}
        <div className="md:flex hidden flex-wrap justify-center gap-2 container mx-auto max-w-screen-xl xl:max-w-screen-md 2xl:max-w-screen-xl">
          {allData.map((all, allIndex) => (
            <div
              key={allIndex}
              id="card-body"
              className="body relative rounded-[20px] w-[38%] lg:w-[31%] xl:w-[48%] 2xl:w-[31%]"
            >
              {children(all)}
            </div>
          ))}
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
    </>
  );
};
