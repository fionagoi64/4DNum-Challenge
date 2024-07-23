import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface NumberCardProps {
  children: (all: any) => React.ReactNode;
  allData: any[];
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export const NumberCard: React.FC<NumberCardProps> = ({
  children,
  allData,
  cardRefs,
}) => {
  return (
    <>
      <div className="bg-background md:py-20">
        <section id="card">
          {/* web view */}
          <div className="md:flex hidden flex-wrap justify-center gap-2 container mx-auto xl:max-w-screen-md 2xl:max-w-screen-xl">
            {allData.map((all, allIndex) => (
              <div
                key={allIndex}
                id={`card-${allIndex}`}
                ref={(ref) => (cardRefs.current[allIndex] = ref)}
                className={`bg-card_background ${all.id} border-4 relative rounded-[20px] lg:w-[31%] xl:w-[48%] 2xl:w-[31%]`}
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
      </div>
    </>
  );
};
