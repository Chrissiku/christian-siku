/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useRef } from "react";
import Section from "./common/Section";
import Title from "./common/Title";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import project from "../assets/works/project.jpg";
import Image from "next/image";
import Link from "next/link";
import WorksData from "@/data/work";
import WorkCard from "./common/WorkCard";

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
              className="scale-95 hover:scale-105 p-2 rounded-xl bg-light4 hover:bg-light2 
              hover:text-bold"
            >
              <ChevronRightIcon className="text-purple w-6 h-6" />
              {""}
            </button>
          </div>
        </div>
        <div>
          <Swiper
            ref={SlideRef}
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {WorksData.map((item, index) => (
              <SwiperSlide
                key={`${item.id} ${index}`}
                className="w-full rounded-t-lg overflow-hidden"
              >
                <WorkCard
                  title={item.title}
                  src={item.src as string}
                  link={item.link}
                  stack={item.stack}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default Works;
