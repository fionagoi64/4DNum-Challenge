import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Card = () => {
  return (
    <>
      <div className="sticky top-0 bg-background z-20 h-20"></div>
      <section id="card" className="">
        <div></div>
        <Swiper className="mySwiper">
          <SwiperSlide className="swiper">Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Card;
