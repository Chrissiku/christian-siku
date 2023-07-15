/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useRef, useState } from "react";
import Section from "./common/Section";
import Title from "./common/Title";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Works = () => {
  const SlideRef = useRef<any>();

  const handleNext = () => {
    if (SlideRef.current) {
      SlideRef.current.swiper?.slideNext();
    }
  };

  const handlePrev = () => {
    if (SlideRef.current) {
      SlideRef.current.swiper?.slidePrev();
    }
  };

  return (
    <Section customClassName="">
      <div className="w-full mx-auto grid grid-cols-1 items-start justify-center gap-10 md:gap-16">
        <div className="w-full mx-auto flex flex-row justify-between items-start">
          <Title label1="my works" label2="I worked on" />
          <div className="hidden md:flex flex-row items-center justify-center gap-2">
            <button
              onClick={handlePrev}
              type="button"
              className="scale-95 hover:scale-105 p-2 rounded-xl bg-light4"
            >
              <ChevronLeftIcon className="text-purple w-6 h-6" />
              {""}
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="scale-95 hover:scale-105 p-2 rounded-xl bg-light4"
            >
              <ChevronRightIcon className="text-purple w-6 h-6" />
              {""}
            </button>
          </div>
        </div>
        <div>
          <Swiper
            ref={SlideRef}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default Works;
